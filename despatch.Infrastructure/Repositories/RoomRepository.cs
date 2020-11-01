using despatch.Domain.Entities;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.RepositorieInterfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public async Task<List<Room>> GetUserRooms(string userId)
        {
            List<Room> result = await _dbSet.Where(room => room.UserRooms.Any(ur => ur.UserId.ToString() == userId))
                .Include(r => r.UserRooms)
                    .ThenInclude(ur => ur.User)
                .ToListAsync();
            return result;
        }
    }
}
