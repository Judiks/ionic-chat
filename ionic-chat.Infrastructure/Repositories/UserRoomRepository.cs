using ionic_chat.DAL.Entities;
using ionic_chat.DAL.Repositories;
using ionic_chat.Infrastructure;
using ionic_chat.Infrastructure.Repositories;

namespace ionic_chat.Infrastructure.Repositories
{
    public class UserRoomRepository : BaseRepository<UserRoom>, IUserRoomRepository
    {
        public UserRoomRepository(ApplicationDBContext applicationDBContext)
            : base(applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
            _dbSet = _applicationDBContext.Set<UserRoom>();
        }
    }
}
