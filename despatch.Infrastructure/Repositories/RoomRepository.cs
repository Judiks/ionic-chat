using despatch.Domain.Entities;
using despatch.Domain.Repositories;

namespace despatch.Infrastructure.Repositories
{
    public class RoomRepository : BaseRepository<Room>, IRoomRepository
    {
        public RoomRepository(ApplicationDBContext applicationDBContext)
            : base(applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
            _dbSet = _applicationDBContext.Set<Room>();
        }

    }
}
