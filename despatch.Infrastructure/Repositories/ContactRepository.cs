using despatch.Domain.Entities;
using despatch.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace despatch.Infrastructure.Repositories
{
    public class ContactRepository : BaseRepository<Contact>, IContactRepository
    {
        public ContactRepository(ApplicationDBContext applicationDbContext)
            : base(applicationDbContext)
        {
            _applicationDBContext = applicationDbContext;
            _dbSet = _applicationDBContext.Set<Contact>();
        }

        public async Task<Contact> GetByIdWithNested(string contactId)
        {
            return await _dbSet
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Addresses)
                        .ThenInclude(a => a.Address)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Images)
                        .ThenInclude(a => a.Image)
                            .ThenInclude(du => du.DeviceUrl)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Images)
                        .ThenInclude(a => a.Image)
                            .ThenInclude(du => du.SourceUrl)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Organizations)
                        .ThenInclude(a => a.Organization)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Urls)
                        .ThenInclude(cd => cd.Url)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.PhoneNumbers)
                        .ThenInclude(a => a.PhoneNumber)
                .FirstOrDefaultAsync(x => x.Id == contactId);
        }

        public async Task<List<Contact>> GetByListPhone(List<string> numbersId, string userPhoneNumber)
        {
            var result = new List<Contact>();
            List<ContactData> contacDataList = await _applicationDBContext.ContactDatas
                .Include(x => x.PhoneNumbers)
                    .ThenInclude(x => x.PhoneNumber)
                .Where(x => x.PhoneNumbers.Any(y => numbersId.Contains(y.PhoneNumberId)))
                .ToListAsync();

            contacDataList = contacDataList.Where(x => x.PhoneNumbers.Any(x => x.PhoneNumber.Equals(userPhoneNumber)))
                .ToList();
            if (!(contacDataList.Count() > 0))
            {
                return result;
            }
            result = await _dbSet.Where(x =>
                contacDataList.Any(y => y.Id.Equals(x.ContactDataId))).ToListAsync();
            return result;
        }

        public async Task<List<Contact>> GetByPhone(string numberId, string userPhoneNumber)
        {
            List<ContactData> contacDataList = await _applicationDBContext.ContactDatas
                .Include(x => x.PhoneNumbers)
                    .ThenInclude(x => x.PhoneNumber)
                .Where(x => x.PhoneNumbers.Any(y => y.PhoneNumberId.Equals(numberId)))
                .ToListAsync();

            contacDataList = contacDataList.Where(x => x.PhoneNumbers.Any(x => x.PhoneNumber.Equals(userPhoneNumber)))
                .ToList();
            if (!(contacDataList.Any())) {
                return null;
            }
            return await _dbSet.Where(x => 
                contacDataList.Any(y => y.Id.Equals(x.ContactDataId))).ToListAsync();
        }

        public async Task<List<Contact>> GetPaginDataByUserId(string userId, int skip)
        {
            List<Contact> contacts = await _dbSet.Skip(skip).Take(25)
                .Where(c => c.UserId == userId)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Addresses)
                        .ThenInclude(a => a.Address)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Images)
                        .ThenInclude(a => a.Image)
                            .ThenInclude(du => du.DeviceUrl)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Images)
                        .ThenInclude(a => a.Image)
                            .ThenInclude(du => du.SourceUrl)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Organizations)
                        .ThenInclude(a => a.Organization)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.Urls)
                        .ThenInclude(cd => cd.Url)
                .Include(c => c.ContactData)
                    .ThenInclude(cd => cd.PhoneNumbers)
                        .ThenInclude(a => a.PhoneNumber)
                    .ToListAsync();
            return contacts;
        }
    }
}
