using despatch.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.Repositories
{
    public interface IUserRoomRepository : IBaseRepository<UserRoom>
    {
        Task<List<UserRoom>> GetByUserId(string Id);
        Task<UserRoom> GetByContactId(string Id);
        Task<List<UserRoom>> GetPaginDataByUserId(string userId, int skip);
        Task<List<Contact>> GetRoomContacts(string roomId);
    }
}
