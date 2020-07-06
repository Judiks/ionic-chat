using ionic_chat.Domain.Entities;
using ionic_chat.Domain.RepositorieInterfaces;

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
