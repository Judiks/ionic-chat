using despatch.Domain.Entities;
using despatch.Domain.RepositorieInterfaces;

namespace despatch.Infrastructure.Repositories
{
    public class MessageRepository : BaseRepository<Message>, IMessageRepository
    {
        public MessageRepository(ApplicationDBContext applicationDBContext)
            : base(applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
            _dbSet = _applicationDBContext.Set<Message>();
        }
    }
}
