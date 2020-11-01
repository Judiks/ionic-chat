using despatch.Domain.Entities;
using despatch.Domain.RepositorieInterfaces;

namespace despatch.Infrastructure.Repositories
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
