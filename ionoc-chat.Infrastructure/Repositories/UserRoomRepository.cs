using ionic_chat.DAL.Entities;
using ionoc_chat.Infrastructure;
using ionoc_chat.Infrastructure.Repositories;

namespace ionic_chat.Infrastructure.Repositories
{
    public class UserRoomRepository : BaseRepository<UserRoom>
    {
        public UserRoomRepository(ApplicationDBContext applicationDBContext)
            : base(applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
            _dbSet = _applicationDBContext.Set<UserRoom>();
        }
    }
}
