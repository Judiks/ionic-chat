using AutoMapper;
using despatch.Domain.Entities;
using despatch.Domain.HelperInterfaces;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Enums;
using despatch.Domain.Models.Room.Request;
using despatch.Domain.Models.Room.Response;
using despatch.Domain.Repositories;
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
        public async Task<RoomResponse> Create(CreateRoomRequest model)
        {
            Room room = _mapper.Map<CreateRoomRequest, Room>(model);
            await _roomRepository.Add(room);
            RoomResponse response = _mapper.Map<Room, RoomResponse>(room);
            return response;
        }

        public async Task<RoomResponse> CreateFromContact(CreateRoomFromContactRequest request)
        {
            var room = new Room();
            string userId = _authHelper.GetUserId();

            room.Name = request.Contact.ContactData.DisplayName;
            room.Type = RoomType.Contact;
            room.PrivacyType = RoomPrivacyType.Private;
            room.CreatorId = userId;

            var userRoom = new UserRoom();
            userRoom.ContactId = request.Contact.Id;
            room.UserRooms = new List<UserRoom>();
            room.UserRooms.Add(userRoom);

            var contactDataImage = request.Contact.ContactData.Images.FirstOrDefault(x => x.Image.IsMain);
            if (!(contactDataImage is null))
            {
                room.RoomImages = new List<RoomImage>();
                var roomImage = new RoomImage();
                roomImage.ImageId = contactDataImage is null ? null : contactDataImage.ImageId;
                room.RoomImages.Add(roomImage);
            }
            await _roomRepository.Add(room);

            RoomResponse response = _mapper.Map<RoomResponse>(room);
            return response;
        }

        public async Task<RoomResponse> GetRoomByContact(GetRoomByContactRequest request)
        {
            var response = new RoomResponse();
            UserRoom userRooms = await _userRoomRepository.GetByContactId(request.ContactId);
            if (userRooms is null)
            {
                return null;
            }
            response = _mapper.Map<RoomResponse>(userRooms);
            return response;
        }

        public async Task<List<RoomResponse>> GetPaginUserRooms(GetRoomDataRequest request)
        {
            string userId = _authHelper.GetUserId();
            List<UserRoom> userRooms = await _userRoomRepository.GetPaginDataByUserId(userId, request.SkipCount);
            List<Room> rooms = userRooms.Select(ur => ur.Room).ToList();
            List<RoomResponse> response = _mapper.Map<List<Room>, List<RoomResponse>>(rooms);
            return response;
        }

        public async Task<GetRoomContactsResponse> GetRoomContacts(GetRoomContactsRequest request)
        {
            var response = new GetRoomContactsResponse();
            List<Contact> contacts = await _userRoomRepository.GetRoomContacts(request.RoomId);
            response.Contacts = _mapper.Map<List<ContactResponse>>(contacts);
            return response;
        }
    }
}
