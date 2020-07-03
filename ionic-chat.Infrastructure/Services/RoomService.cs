using AutoMapper;
using ionic_chat.DAL.Entities;
using ionic_chat.DAL.Repositories;
using ionic_chat.Infrastructure.Models.Default.Request;
using ionic_chat.Infrastructure.Models.Default.Response;
using ionic_chat.Infrastructure.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ionic_chat.Infrastructure.Services
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
