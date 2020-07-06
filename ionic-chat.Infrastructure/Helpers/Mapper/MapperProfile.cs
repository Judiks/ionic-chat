using AutoMapper;
using ionic_chat.Domain.Entities;
using ionic_chat.Domain.Models.Default.Request;
using ionic_chat.Domain.Models.Default.Response;

namespace ionic_chat.Infrastructure.Helpers.Mapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            // Request's
            CreateMap<RoomRequest, Room>();
            CreateMap<UserRequest, User>();
            // Response's
            CreateMap<Room, RoomResponse>();
        }
    }
}
