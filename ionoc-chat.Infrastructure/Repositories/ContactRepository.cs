using ionic_chat.DAL.Entities;
using ionic_chat.DAL.Repositories;
using ionoc_chat.Infrastructure;
using ionoc_chat.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Security.Authentication;

namespace ionic_chat.Infrastructure.Repositories
{
    public class ContactRepository : BaseRepository<Contact>
    {
        public ContactRepository(ApplicationDBContext applicationDbContext)
            : base(applicationDbContext)
        {
            _applicationDBContext = applicationDbContext;
            _dbSet = _applicationDBContext.Set<Contact>();
        }
    }
}
