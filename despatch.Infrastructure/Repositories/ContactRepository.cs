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
            List<Contact> contacts = await _dbSet.Skip(model.SkipCount).Take(10).Where(c => c.UserId == model.UserId).ToListAsync();
            return contacts;
        }
    }
}
