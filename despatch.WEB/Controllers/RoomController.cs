
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
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RoomController : Controller
    {
        private readonly IRoomService _roomService;
        public RoomController(IRoomService roomService)
        {
            _roomService = roomService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(RoomResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> Create(CreateRoomRequest model)
        {
            RoomResponse response = await _roomService.Create(model);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(RoomResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> CreateFromContact(CreateRoomFromContactRequest model)
        {
            RoomResponse response = await _roomService.CreateFromContact(model);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(RoomResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetRoomByContact(GetRoomByContactRequest request)
        {
            RoomResponse response = await _roomService.GetRoomByContact(request);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(List<RoomResponse>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetUserRooms(GetRoomDataRequest request)
        {
            List<RoomResponse> response = await _roomService.GetPaginUserRooms(request);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(GetRoomContactsResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetRoomContacts(GetRoomContactsRequest request)
        {
            GetRoomContactsResponse response = await _roomService.GetRoomContacts(request);
            return Ok(response);
        }
    }
}
