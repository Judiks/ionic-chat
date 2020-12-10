using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Room.Request;
using despatch.Domain.Models.Room.Response;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.Services.Interfaces
{
    public interface IRoomService
    {
        Task<RoomResponse> Create(CreateRoomRequest model);
        Task<RoomResponse> CreateFromContact(CreateRoomFromContactRequest request);
        Task<RoomResponse> GetRoomByContact(GetRoomByContactRequest request);
        Task<List<RoomResponse>> GetPaginUserRooms(GetRoomDataRequest request);
        Task<GetRoomContactsResponse> GetRoomContacts(GetRoomContactsRequest request);
    }
}
