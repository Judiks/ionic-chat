using ionic_chat.Infrastructure.Models.Default.Request;
using ionic_chat.Infrastructure.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ionic_chat.WEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : Controller
    {
        private readonly IRoomService _roomService;
        public RoomController(IRoomService roomService)
        {
            _roomService = roomService;
        }

        [HttpPost]
        public async Task Create(RoomRequest model)
        {
            await _roomService.Create(model);
        }
    }
}
