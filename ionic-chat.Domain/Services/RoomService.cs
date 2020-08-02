using AutoMapper;
using ionic_chat.Domain.Entities;
using ionic_chat.Domain.Models.Default.Request;
using ionic_chat.Domain.Models.Default.Response;
using ionic_chat.Domain.RepositorieInterfaces;
using ionic_chat.Domain.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ionic_chat.Domain.Services
{
    public class RoomService : IRoomService
    {
        private readonly IRoomRepository _roomRepository;
        private readonly IMapper _mapper;
        public RoomService(IRoomRepository roomRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _roomRepository = roomRepository;
        }
        public async Task Create(RoomRequest model)
        {
            var room = _mapper.Map<RoomRequest, Room>(model);
            await _roomRepository.Add(room);
        }

        public async Task<List<RoomResponse>> GetAll()
        {
            var rooms = await _roomRepository.GetAll();
            var response = _mapper.Map<List<Room>, List<RoomResponse>>(rooms);
            return response;
        }
    }
}
