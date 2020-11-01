using AutoMapper;
using despatch.Domain.Entities;
using despatch.Domain.Models.Account.Response;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Room.Request;
using despatch.Domain.Models.Room.Response;
using System;

namespace despatch.Infrastructure.Helpers.Mapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            // Requests
            // Users
            CreateMap<UserRequest, User>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString()));
            // Rooms
            CreateMap<RoomRequest, Room>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString()));
            CreateMap<CreateRoomRequest, Room>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString()));
            // Contacts
            CreateMap<ContactRequest, Contact>()
                .ForMember(c => c.ContactData, o => o.MapFrom(cd => cd.ContactData))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString()));
            CreateMap<ContactDataRequest, ContactData>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString()));


            // Responses
            // Users
            CreateMap<User, UserResponse>();
            CreateMap<User, LoginResponse>();
            CreateMap<User, RefreshTokenResponse>();
            // Rooms
            CreateMap<Room, RoomResponse>();
            CreateMap<Room, CreateRoomResponse>();
            // Contacts
            CreateMap<Contact, ContactResponse>();
            CreateMap<ContactData, ContactDataResponse>();
        }
    }
}
