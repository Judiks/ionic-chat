using despatch.Domain.Entities;
using despatch.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public async Task<UserRoom> GetByContactId(string Id)
        {
            return await _dbSet
                .Include(r => r.Room)
                .FirstOrDefaultAsync(ur => ur.ContactId == Id);
        }

        public async Task<List<UserRoom>> GetByUserId(string Id)
        {
            return await _dbSet.Where(ur => ur.Contact.UserId == Id)
                .Include(r => r.Room)
                .ToListAsync();
        }

        public async Task<List<UserRoom>> GetPaginDataByUserId(string userId, int skip)
        {
            return await _dbSet.Skip(skip).Take(25)
                .Where(ur => ur.Contact.UserId == userId)
                .Include(x => x.Room)
                    .ThenInclude(x => x.RoomImages)
                        .ThenInclude(x => x.Image)
                            .ThenInclude(x => x.DeviceUrl)
                .Include(x => x.Contact)
                .ToListAsync();
        }

        public async Task<List<Contact>> GetRoomContacts(string roomId)
        {
            return await _dbSet
                .Where(ur => ur.RoomId == roomId)
                .Include(x => x.Contact)
                    .ThenInclude(x => x.ContactData)
                        .ThenInclude(x => x.Images)
                .Include(x => x.Contact)
                    .ThenInclude(x => x.ContactData)
                        .ThenInclude(x => x.PhoneNumbers)
                            .ThenInclude(x => x.PhoneNumber)
                .Select(x => x.Contact)
                .ToListAsync();
        }
    }
}
