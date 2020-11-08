using despatch.Domain.Entities;
using despatch.Domain.Models.Contacts.Request;
using despatch.Domain.RepositorieInterfaces;
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

        public async Task<List<Contact>> GetContactData(GetContactDataRequest model)
        {
            List<Contact> contacts = await _dbSet.Skip(model.SkipCount).Take(25)
                .Where(c => c.UserId == model.UserId)
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
