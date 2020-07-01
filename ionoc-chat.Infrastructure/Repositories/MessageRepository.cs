using ionic_chat.DAL.Entities;
using ionoc_chat.Infrastructure;
using ionoc_chat.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ionic_chat.Infrastructure.Repositories
{
    public class MessageRepository : BaseRepository<Message>
    {
        public MessageRepository(ApplicationDBContext applicationDBContext)
            : base(applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
            _dbSet = _applicationDBContext.Set<Message>();
        }
    }
}
