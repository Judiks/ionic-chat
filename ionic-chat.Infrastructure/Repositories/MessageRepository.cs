using ionic_chat.Domain.Entities;
using ionic_chat.Domain.RepositorieInterfaces;

namespace ionic_chat.Infrastructure.Repositories
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
