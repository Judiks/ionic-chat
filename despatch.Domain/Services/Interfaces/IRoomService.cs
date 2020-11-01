using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Room.Request;
using despatch.Domain.Models.Room.Response;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.Services.Interfaces
{
    public interface IRoomService
    {
        Task<CreateRoomResponse> Create(CreateRoomRequest model);
        Task<List<RoomResponse>> GetUserRooms();
    }
}
