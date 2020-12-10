using AutoMapper;
using despatch.Core.Extensions;
using despatch.Domain.Entities;
using despatch.Domain.HelperInterfaces;
using despatch.Domain.Models.Contacts.Request;
using despatch.Domain.Models.Contacts.Response;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Repositories;
using despatch.Domain.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace despatch.Domain.Services
{
    public class ContactService : IContactService
    {
        private readonly IMapper _mapper;
        private readonly IAuthHelper _authHelper;
        private readonly IUserRepository _userRepository;
        private readonly IContactRepository _contactRepository;
        private readonly IPhoneNumberRepository _phoneNumberRepository;
        public ContactService(IContactRepository contactRepository, IMapper mapper, IAuthHelper authHelper, IPhoneNumberRepository phoneNumberRepository, IUserRepository userRepository)
        {
            _phoneNumberRepository = phoneNumberRepository;
            _contactRepository = contactRepository;
            _userRepository = userRepository;
            _authHelper = authHelper;
            _mapper = mapper;
        }

        public async Task<List<ContactResponse>> GetAll()
        {
            List<Contact> contacts = await _contactRepository.GetAll();
            List<ContactResponse> response = _mapper.Map<List<Contact>, List<ContactResponse>>(contacts);
            return response;
        }

        public async Task<List<ContactResponse>> GetPaginDataByUserId(GetContactDataRequest model)
        {
            string userId = _authHelper.GetUserId();
            List<Contact> contacts = await _contactRepository.GetPaginDataByUserId(userId, model.SkipCount);
            List<ContactResponse> response = _mapper.Map<List<Contact>, List<ContactResponse>>(contacts);
            return response;
        }

        public async Task<List<SyncContactResponse>> SyncAllFromNative(List<SyncContactRequest> model)
        {
            string userId = _authHelper.GetUserId();
            User user = await _userRepository.GetById(userId);
            List<Contact> contacts = _mapper.Map<List<SyncContactRequest>, List<Contact>>(model);
            var phoneNumbers = new List<string>();
            foreach (var contact in contacts)
            {
                foreach (var phoneNumber in contact.ContactData.PhoneNumbers)
                {
                    phoneNumber.PhoneNumber.Number = phoneNumber.PhoneNumber.Number.PhoneNumberFormat();
                    phoneNumbers.Add(phoneNumber.PhoneNumber.Number);
                }
                contact.CreatingDate = DateTime.UtcNow;
            }
            contacts = GroupContactsByNumber(contacts);
            List<PhoneNumber> existPhoneNumbers = await _phoneNumberRepository.GetByListNumber(phoneNumbers);
            if (existPhoneNumbers.Any())
            {
                List<string> existPhoneNumbersIds = existPhoneNumbers.Select(x => x.Id).ToList();
                List<Contact> existContacts = await _contactRepository.GetByListPhone(existPhoneNumbersIds, user.PhoneNumber);
                foreach (var contact in existContacts)
                {
                    contact.FriendId = userId;
                }
                await _contactRepository.UpdateRange(existContacts);
                foreach (var contact in contacts)
                {
                    if (existContacts.Any(x => x.Id.Equals(contact.Id)))
                    {
                        contact.FriendId = existContacts.FirstOrDefault(x => x.Id.Equals(contact.Id)).UserId;
                        contact.ContactData.PhoneNumbers = contact.ContactData.PhoneNumbers.Where(x => !phoneNumbers.Contains(x.PhoneNumber.Number)).ToList();
                    }
                }
            }
            await _contactRepository.AddRange(contacts);
            List<SyncContactResponse> responses = _mapper.Map<List<Contact>, List<SyncContactResponse>>(contacts);
            return responses;
        }

        public List<Contact> GroupContactsByNumber(List<Contact> contacts)
        {
            var duplicates = new List<Contact>();
            foreach (var contact in contacts)
            {
                var resultData = new List<ContactDataPhoneNumber>();
                resultData = contact.ContactData.PhoneNumbers.GroupBy(x => x.PhoneNumber.Number).Select(x => x.FirstOrDefault()).ToList();
                contact.ContactData.PhoneNumbers = resultData;

                // if this contact already exist in income list
                var mappedPhoneNumbers = resultData.Select(x => new { x.Id, x.PhoneNumber.Number }).ToList();
                var existContact = contacts.FirstOrDefault(x => x.ContactData.PhoneNumbers.Any(y =>
                    !mappedPhoneNumbers.Any(z => z.Id.Equals(y.Id)) && mappedPhoneNumbers.Any(z => z.Number.Equals(y.PhoneNumber.Number))));
                if (!(existContact is null))
                {
                    existContact = SyncContact(existContact, contact);
                    if (!duplicates.Any(x => x.ContactData.PhoneNumbers.Any(z => mappedPhoneNumbers.Any(y => y.Number.Equals(z.PhoneNumber.Number)))))
                    {
                        duplicates.Add(contact);
                    }
                }
            }
            contacts = contacts.Except(duplicates).ToList();
            return contacts;
        }

        public Contact SyncContact(Contact existContact, Contact newContact)
        {
            existContact.ContactData.BirthdayDate = !existContact.ContactData.BirthdayDate.HasValue ? newContact.ContactData.BirthdayDate : existContact.ContactData.BirthdayDate;
            existContact.ContactData.DisplayName = string.IsNullOrEmpty(existContact.ContactData.DisplayName) ? newContact.ContactData.DisplayName : existContact.ContactData.DisplayName;
            existContact.ContactData.Email = string.IsNullOrEmpty(existContact.ContactData.Email) ? newContact.ContactData.Email : existContact.ContactData.Email;
            existContact.ContactData.FirstName = string.IsNullOrEmpty(existContact.ContactData.FirstName) ? newContact.ContactData.FirstName : existContact.ContactData.FirstName;
            existContact.ContactData.HonorificPrefix = string.IsNullOrEmpty(existContact.ContactData.HonorificPrefix) ? newContact.ContactData.HonorificPrefix : existContact.ContactData.HonorificPrefix;
            existContact.ContactData.HonorificSuffix = string.IsNullOrEmpty(existContact.ContactData.HonorificSuffix) ? newContact.ContactData.HonorificSuffix : existContact.ContactData.HonorificSuffix;
            existContact.ContactData.LastName = string.IsNullOrEmpty(existContact.ContactData.MiddleName) ? newContact.ContactData.MiddleName : existContact.ContactData.MiddleName;
            existContact.ContactData.MiddleName = string.IsNullOrEmpty(existContact.ContactData.MiddleName) ? newContact.ContactData.MiddleName : existContact.ContactData.MiddleName;
            existContact.ContactData.Nickname = string.IsNullOrEmpty(existContact.ContactData.Nickname) ? newContact.ContactData.Nickname : existContact.ContactData.Nickname;
            existContact.ContactData.Note = string.IsNullOrEmpty(existContact.ContactData.Note) ? newContact.ContactData.Note : existContact.ContactData.Note;
            // sync images
            List<string> existImageNames = newContact.ContactData.Images.Select(x => x.Image.Name).ToList();
            List<ContactDataImage> newImages = newContact.ContactData.Images.Where(x => !existImageNames.Contains(x.Image.Name)).ToList();
            newContact.ContactData.Images.ToList().AddRange(newImages);

            // sync addresses
            List<string> existAddressNames = newContact.ContactData.Addresses.Select(x => x.Address.DeviceName).ToList();
            List<ContactDataAddress> newAddress = newContact.ContactData.Addresses.Where(x => !existAddressNames.Contains(x.Address.DeviceName)).ToList();
            newContact.ContactData.Addresses.ToList().AddRange(newAddress);

            // sync organizations
            List<string> existOrganizationsNames = newContact.ContactData.Organizations.Select(x => x.Organization.Name).ToList();
            List<string> existOrganizationsPositions = newContact.ContactData.Organizations.Select(x => x.Organization.Position).ToList();
            List<ContactDataOrganization> newOrganizations = newContact.ContactData.Organizations.Where(x => !existOrganizationsNames.Contains(x.Organization.Name)
                && !existAddressNames.Contains(x.Organization.Position)).ToList();
            newContact.ContactData.Organizations.ToList().AddRange(newOrganizations);

            // sync urls
            List<string> existUrls = newContact.ContactData.Addresses.Select(x => x.Address.DeviceName).ToList();
            List<ContactDataUrl> newUrls = newContact.ContactData.Urls.Where(x => !existUrls.Contains(x.Url.Path)).ToList();
            newContact.ContactData.Urls.ToList().AddRange(newUrls);
            return existContact;
        }
    }
}
