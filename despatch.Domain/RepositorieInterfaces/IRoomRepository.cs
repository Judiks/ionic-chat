using despatch.Domain.Entities;
using despatch.Domain.Models.Default.Response;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.RepositorieInterfaces
{
    public interface IRoomRepository : IBaseRepository<Room>
    {
        Task<List<Room>> GetUserRooms(string userId);
    }
}
