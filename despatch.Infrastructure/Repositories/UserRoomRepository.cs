using despatch.Domain.Entities;
using despatch.Domain.RepositorieInterfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace despatch.Infrastructure.Repositories
{
    public class UserRoomRepository : BaseRepository<UserRooms>, IUserRoomRepository
    {
        public UserRoomRepository(ApplicationDBContext applicationDBContext)
            : base(applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
            _dbSet = _applicationDBContext.Set<UserRooms>();
        }

        public async Task<List<UserRooms>> GetUserRoomsByUserId(string Id)
        {
            return await _dbSet.Where(ur => ur.UserId == Id)
                .Include(r => r.Room)
                .Include(u => u.User)
                .ToListAsync();
        }
    }
}
