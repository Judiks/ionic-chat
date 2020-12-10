using AutoMapper;
using despatch.Domain.Entities;
using despatch.Domain.Models.Auth.Response;
using despatch.Domain.Models.Contacts.Request;
using despatch.Domain.Models.Contacts.Response;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Room.Request;
using System;

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
            CreateMap<ContactDataAddressesRequest, ContactDataAddress>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Address, o => o.MapFrom(y => y.Address))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // ContactDataOrganizations
            CreateMap<ContactDataOrganizationsRequest, ContactDataOrganization>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Organization, o => o.MapFrom(y => y.Organization))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // ContactDataImages
            CreateMap<ContactDataImagesRequest, ContactDataImage>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Image, o => o.MapFrom(y => y.Image))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // ContactDataPhoneNumbers
            CreateMap<ContactDataPhoneNumbersRequest, ContactDataPhoneNumber>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.PhoneNumber, o => o.MapFrom(y => y.PhoneNumber))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // ContactDataUrls
            CreateMap<ContactDataUrlsRequest, ContactDataUrl>()
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
            CreateMap<RoomImageRequest, RoomImage>()
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
            CreateMap<UserAddressesRequest, UserAddresse>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Address, o => o.MapFrom(y => y.Address))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserImages
            CreateMap<UserImagesRequest, UserImage>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Image, o => o.MapFrom(y => y.Image))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserOrganizations
            CreateMap<UserOrganizationsRequest, UserOrganization>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Organization, o => o.MapFrom(y => y.Organization))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserPhoneNumbers
            CreateMap<UserPhoneNumbersRequest, UserPhoneNumber>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.PhoneNumber, o => o.MapFrom(y => y.PhoneNumber))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // Users
            CreateMap<UserRequest, User>()
                .ForMember(x => x.City, o => o.MapFrom(y => y.City))
                .ForMember(x => x.Country, o => o.MapFrom(y => y.Country))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserRooms
            CreateMap<UserRoomsRequest, UserRoom>()
                .ForMember(x => x.Room, o => o.MapFrom(y => y.Room))
                .ForMember(i => i.Id, o => o.MapFrom(y => y.Id ?? Guid.NewGuid().ToString())).ReverseMap();

            // UserPhoneNumbers
            CreateMap<UserUrlsRequest, UserUrl>()
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
            CreateMap<ContactDataAddressesResponse, ContactDataAddress>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Address, o => o.MapFrom(y => y.Address))
                .ReverseMap();

            // ContactDataOrganizations
            CreateMap<ContactDataOrganizationResponse, ContactDataOrganization>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Organization, o => o.MapFrom(y => y.Organization))
                .ReverseMap();

            // ContactDataImages
            CreateMap<ContactDataImageResponse, ContactDataImage>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Image, o => o.MapFrom(y => y.Image))
                .ReverseMap();

            // ContactDataPhoneNumbers
            CreateMap<ContactDataPhoneNumberResponse, ContactDataPhoneNumber>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.PhoneNumber, o => o.MapFrom(y => y.PhoneNumber))
                .ReverseMap();

            // ContactDataUrls
            CreateMap<ContactDataUrlsResponse, ContactDataUrl>()
                .ForMember(x => x.ContactData, o => o.MapFrom(y => y.ContactData))
                .ForMember(x => x.Url, o => o.MapFrom(y => y.Url))
                .ReverseMap();

            // Country
            CreateMap<CountryResponse, Country>()
               .ReverseMap();


            // Images
            CreateMap<ImageResponse, Image>()
                .ForMember(x => x.DeviceUrl, o => o.MapFrom(y => y.DeviceUrl))
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
            CreateMap<RoomImageResponse, RoomImage>()
                .ForMember(x => x.Image, o => o.MapFrom(y => y.Image))
                .ReverseMap();

            // Rooms
            CreateMap<RoomResponse, Room>()
                .ForMember(x => x.RoomImages, o => o.MapFrom(y => y.RoomImages))
                .ReverseMap();

            // Urls
            CreateMap<UrlResponse, Url>()
                .ReverseMap();

            // UserAddresses
            CreateMap<UserAddressResponse, UserAddresse>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Address, o => o.MapFrom(y => y.Address))
                .ReverseMap();

            // UserImages
            CreateMap<UserImageResponse, UserImage>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Image, o => o.MapFrom(y => y.Image))
                .ReverseMap();

            // UserOrganizations
            CreateMap<UserOrganizationResponse, UserOrganization>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Organization, o => o.MapFrom(y => y.Organization))
                .ReverseMap();

            // UserPhoneNumbers
            CreateMap<UserPhoneNumbersResponse, UserPhoneNumber>()
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
            CreateMap<UserRoomResponse, UserRoom>()
                .ForMember(x => x.Room, o => o.MapFrom(y => y.Room))
                .ForMember(x => x.Contact, o => o.MapFrom(y => y.Contact))
                .ReverseMap();

            // UserPhoneNumbers
            CreateMap<UserUrlsResponse, UserUrl>()
                .ForMember(x => x.User, o => o.MapFrom(y => y.User))
                .ForMember(x => x.Url, o => o.MapFrom(y => y.Url))
                .ReverseMap();

            // BY SECTION
            // Auth
        }
    }
}
