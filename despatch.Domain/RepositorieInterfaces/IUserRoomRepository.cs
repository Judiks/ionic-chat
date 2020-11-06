using despatch.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.RepositorieInterfaces
{
    public interface IUserRoomRepository : IBaseRepository<UserRooms>
    {
        Task<List<UserRooms>> GetUserRoomsByUserId(string Id);
    }
}
