using AutoMapper;
using despatch.Domain.Entities;
using despatch.Domain.Models.Auth.Response;
using despatch.Domain.Models.Contacts.Request;
using despatch.Domain.Models.Contacts.Response;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Room.Request;
using despatch.Domain.Models.Room.Response;
using System;
using System.Collections.Generic;

namespace despatch.Infrastructure.Helpers.Mapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            // Requests

            // Addresses
            CreateMap<AddressRequest, Address>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // Cites
            CreateMap<CityRequest, City>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // Contacts
            CreateMap<ContactRequest, Contact>()
                .ForMember(c => c.ContactData, o => o.MapFrom(cd => cd.ContactData))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();
            CreateMap<SyncContactRequest, Contact>()
                .ForMember(c => c.ContactData, o => o.MapFrom(cd => cd.ContactData))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();
            // ContactDatas
            CreateMap<ContactDataRequest, ContactData>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // ContactDataAddresses
            CreateMap<ContactDataAddressesRequest, ContactDataAddresses>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Address, o => o.MapFrom(y => y.Address))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // ContactDataOrganizations
            CreateMap<ContactDataOrganizationsRequest, ContactDataOrganizations>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Organization, o => o.MapFrom(y => y.Organization))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // ContactDataImages
            CreateMap<ContactDataImagesRequest, ContactDataImages>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Image, o => o.MapFrom(y => y.Image))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // ContactDataPhoneNumbers
            CreateMap<ContactDataPhoneNumbersRequest, ContactDataPhoneNumbers>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.PhoneNumber, o => o.MapFrom(y => y.PhoneNumber))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // ContactDataUrls
            CreateMap<ContactDataUrlsRequest, ContactDataUrls>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Url, o => o.MapFrom(y => y.Url))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // Country
            CreateMap<CountryRequest, Country>()
               .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();


            // Images
            CreateMap<ImageRequest, Image>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // Messages
            CreateMap<MessageRequest, Message>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // Organizations
            CreateMap<OrganizationRequest, Organization>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // PhoneNumber
            CreateMap<PhoneNumberRequest, PhoneNumber>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // RoomImages
            CreateMap<RoomImagesRequest, RoomImages>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // Rooms
            CreateMap<RoomRequest, Room>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();
            CreateMap<CreateRoomRequest, Room>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // Urls
            CreateMap<UrlRequest, Url>()
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserAddresses
            CreateMap<UserAddressesRequest, UserAddresses>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Address, o => o.MapFrom(y => y.Address))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserImages
            CreateMap<UserImagesRequest, UserImages>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Image, o => o.MapFrom(y => y.Image))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserOrganizations
            CreateMap<UserOrganizationsRequest, UserOrganizations>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Organization, o => o.MapFrom(y => y.Organization))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserPhoneNumbers
            CreateMap<UserPhoneNumbersRequest, UserPhoneNumbers>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.PhoneNumber, o => o.MapFrom(y => y.PhoneNumber))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();
           
            // Users
            CreateMap<UserRequest, User>()
                .ForMember(x => x.City, o => o.MapFrom(y => y.City))
                .ForMember(x => x.Country, o => o.MapFrom(y => y.Country))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserRooms
            CreateMap<UserRoomsRequest, UserRooms>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Room, o => o.MapFrom(y => y.Room))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserPhoneNumbers
            CreateMap<UserUrlsRequest, UserUrls>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Url, o => o.MapFrom(y => y.Url))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();
            
            // BY SECTION
            // Auth






            // Responses

            // Addresses
            CreateMap<AddressResponse, Address>()
                .ReverseMap();

            // Cites
            CreateMap<CityResponse, City>()
                .ReverseMap();

            // Contacts
            CreateMap<ContactResponse, Contact>()
                .ForMember(c => c.ContactData, o => o.MapFrom(cd => cd.ContactData))
                .ReverseMap();
            CreateMap<SyncContactResponse, Contact>()
                .ForMember(c => c.ContactData, o => o.MapFrom(cd => cd.ContactData))
                .ReverseMap();
            // ContactDatas
            CreateMap<ContactDataResponse, ContactData>()
                .ReverseMap();

            // ContactDataAddresses
            CreateMap<ContactDataAddressesResponse, ContactDataAddresses>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Address, o => o.MapFrom(y => y.Address))
                .ReverseMap();

            // ContactDataOrganizations
            CreateMap<ContactDataOrganizationsResponse, ContactDataOrganizations>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Organization, o => o.MapFrom(y => y.Organization))
                .ReverseMap();

            // ContactDataImages
            CreateMap<ContactDataImagesResponse, ContactDataImages>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Image, o => o.MapFrom(y => y.Image))
                .ReverseMap();

            // ContactDataPhoneNumbers
            CreateMap<ContactDataPhoneNumbersResponse, ContactDataPhoneNumbers>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.PhoneNumber, o => o.MapFrom(y => y.PhoneNumber))
                .ReverseMap();

            // ContactDataUrls
            CreateMap<ContactDataUrlsResponse, ContactDataUrls>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Url, o => o.MapFrom(y => y.Url))
                .ReverseMap();

            // Country
            CreateMap<CountryResponse, Country>()
               .ReverseMap();


            // Images
            CreateMap<ImageResponse, Image>()
                .ReverseMap();

            // Messages
            CreateMap<MessageResponse, Message>()
                .ReverseMap();

            // Organizations
            CreateMap<OrganizationResponse, Organization>()
                .ReverseMap();

            // PhoneNumber
            CreateMap<PhoneNumberResponse, PhoneNumber>()
                .ReverseMap();

            // RoomImages
            CreateMap<RoomImagesResponse, RoomImages>()
                .ReverseMap();

            // Rooms
            CreateMap<RoomResponse, Room>()
                .ReverseMap();
            CreateMap<CreateRoomResponse, Room>()
                .ReverseMap();

            // Urls
            CreateMap<UrlResponse, Url>()
                .ReverseMap();

            // UserAddresses
            CreateMap<UserAddressesResponse, UserAddresses>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Address, o => o.MapFrom(y => y.Address))
                .ReverseMap();

            // UserImages
            CreateMap<UserImagesResponse, UserImages>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Image, o => o.MapFrom(y => y.Image))
                .ReverseMap();

            // UserOrganizations
            CreateMap<UserOrganizationsResponse, UserOrganizations>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Organization, o => o.MapFrom(y => y.Organization))
                .ReverseMap();

            // UserPhoneNumbers
            CreateMap<UserPhoneNumbersResponse, UserPhoneNumbers>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.PhoneNumber, o => o.MapFrom(y => y.PhoneNumber))
                .ReverseMap();

            // Users
            CreateMap<UserResponse, User>()
                .ForMember(x => x.City, o => o.MapFrom(y => y.City))
                .ForMember(x => x.Country, o => o.MapFrom(y => y.Country))
                .ReverseMap();
            CreateMap<User, RegisterResponse>();
            CreateMap<User, LoginResponse>();
            CreateMap<User, RefreshTokenResponse>();

            // UserRooms
            CreateMap<UserRoomsResponse, UserRooms>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Room, o => o.MapFrom(y => y.Room))
                .ReverseMap();

            // UserPhoneNumbers
            CreateMap<UserUrlsResponse, UserUrls>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Url, o => o.MapFrom(y => y.Url))
                .ReverseMap();

            // BY SECTION
            // Auth
        }
    }
}
