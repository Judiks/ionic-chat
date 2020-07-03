using ionic_chat.Infrastructure.Models.Default.Request;
using ionic_chat.Infrastructure.Models.Default.Response;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ionic_chat.Infrastructure.Services.Interfaces
{
    public interface IRoomService
    {
        Task Create(RoomRequest model);
        Task<List<RoomResponse>> GetAll();
    }
}
