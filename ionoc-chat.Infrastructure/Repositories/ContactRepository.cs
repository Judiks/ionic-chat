using ionic_chat.DAL.Entities;
using ionic_chat.DAL.Repositories;
using ionoc_chat.Infrastructure;
using ionoc_chat.Infrastructure.Repositories;

namespace ionic_chat.Infrastructure.Repositories
{
    public class ContactRepository : BaseRepository<Contact>, IContactRepository
    {
        public ContactRepository(ApplicationDBContext applicationDbContext)
            : base(applicationDbContext)
        {
            _applicationDBContext = applicationDbContext;
            _dbSet = _applicationDBContext.Set<Contact>();
        }
    }
}
