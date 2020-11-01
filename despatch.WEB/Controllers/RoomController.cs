using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Room.Request;
using despatch.Domain.Models.Room.Response;
using despatch.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.WEB.Controllers
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
        [ProducesResponseType(typeof(CreateRoomResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> Create(CreateRoomRequest model)
        {
            CreateRoomResponse response = await _roomService.Create(model);
            return Ok(response);
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<RoomResponse>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetUserRooms()
        {
            List<RoomResponse> response  = await _roomService.GetUserRooms();
            return Ok(response);
        }
    }
}
