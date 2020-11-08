using AutoMapper;
using despatch.Domain.Entities;
using despatch.Domain.Models.Contacts.Request;
using despatch.Domain.Models.Contacts.Response;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.RepositorieInterfaces;
using despatch.Domain.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Services
{
    public class ContactService: IContactService
    {
        private readonly IMapper _mapper;
        private readonly IContactRepository _contactRepository;
        public ContactService(IContactRepository contactRepository, IMapper mapper)
        {
            _contactRepository = contactRepository;
            _mapper = mapper;
        }

        public async Task<List<ContactResponse>> GetAll()
        {
            List<Contact> contacts = await _contactRepository.GetAll();
            List<ContactResponse> response = _mapper.Map<List<Contact>, List<ContactResponse>>(contacts);
            return response;
        }

        public async Task<List<ContactResponse>> GetContactData(GetContactDataRequest model)
        {
            List<Contact> contacts = await _contactRepository.GetContactData(model);
            List<ContactResponse> response = _mapper.Map<List<Contact>, List<ContactResponse>>(contacts);
            return response;
        }

        public async Task<List<SyncContactResponse>> SyncAllFromNative(List<SyncContactRequest> model)
        {
            List<Contact> contacts = _mapper.Map<List<SyncContactRequest>, List<Contact>>(model);
            await _contactRepository.AddRange(contacts);
            List<SyncContactResponse> responses = _mapper.Map<List<Contact>, List<SyncContactResponse>>(contacts);
            return responses;
        }
    }
}
