using ionic_chat.Domain.Models.Default.Request;
using ionic_chat.Domain.Models.Default.Response;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ionic_chat.Domain.Services.Interfaces
{
    public interface IRoomService
    {
        Task Create(RoomRequest model);
        Task<List<RoomResponse>> GetAll();
    }
}
