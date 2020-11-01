using AutoMapper;
using despatch.Domain.Entities;
using despatch.Domain.HelperInterfaces;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Room.Request;
using despatch.Domain.Models.Room.Response;
using despatch.Domain.RepositorieInterfaces;
using despatch.Domain.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.Services
{
    public class RoomService : IRoomService
    {
        private readonly IRoomRepository _roomRepository;
        private readonly IMapper _mapper;
        private readonly IAuthHelper _authHelper;
        public RoomService(IRoomRepository roomRepository,
            IMapper mapper, IAuthHelper authHelper)
        {
            _mapper = mapper;
            _roomRepository = roomRepository;
            _authHelper = authHelper;

        }
        public async Task<CreateRoomResponse> Create(CreateRoomRequest model)
        {
            Room room = _mapper.Map<CreateRoomRequest, Room>(model);
            await _roomRepository.Add(room);
            CreateRoomResponse response = _mapper.Map<Room, CreateRoomResponse>(room);
            return response;
        }

        public async Task<List<RoomResponse>> GetUserRooms()
        {
            var userId = _authHelper.GetUserId();
            List<Room> rooms = await _roomRepository.GetUserRooms(userId);
            List<RoomResponse> response = _mapper.Map<List<Room>, List<RoomResponse>>(rooms);
            return response;
        }
    }
}
