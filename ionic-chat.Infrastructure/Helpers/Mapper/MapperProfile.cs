using AutoMapper;
using ionic_chat.DAL.Entities;
using ionic_chat.Infrastructure.Models.Default.Request;
using ionic_chat.Infrastructure.Models.Default.Response;

namespace ionic_chat.Infrastructure.Helpers.Mapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            // Request's
            CreateMap<RoomRequest, Room>();

            // Response's
            CreateMap<Room, RoomResponse>();
        }
    }
}
