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
using System.Linq;
using System.Threading.Tasks;

namespace despatch.Domain.Services
{
    public class RoomService : IRoomService
    {
        private readonly IRoomRepository _roomRepository;
        private readonly IUserRoomRepository _userRoomRepository;
        private readonly IMapper _mapper;
        private readonly IAuthHelper _authHelper;
        public RoomService(IRoomRepository roomRepository,
            IMapper mapper, IAuthHelper authHelper, IUserRoomRepository userRoomRepository)
        {
            _mapper = mapper;
            _roomRepository = roomRepository;
            _authHelper = authHelper;
            _userRoomRepository = userRoomRepository;

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
            List<UserRooms> userRooms = await _userRoomRepository.GetUserRoomsByUserId(userId);
            List<Room> rooms = userRooms.Select(ur => ur.Room).ToList();
            List<RoomResponse> response = _mapper.Map<List<Room>, List<RoomResponse>>(rooms);
            return response;
        }
    }
}
