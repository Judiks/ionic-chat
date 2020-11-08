using despatch.Domain.Models.Enums;
using System.Collections.Generic;

namespace despatch.Domain.Models.Default.Response
{
    public class RoomResponse : BaseEntityResponse
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public RoomType Type { get; set; }
        public RoomPrivacyType PrivacyType { get; set; }

        public string CreatorId { get; set; }
        public string LastMessageId { get; set; }

        public UserResponse Creator { get; set; }
        public MessageResponse LastMessage { get; set; }

        public virtual List<UserRoomsResponse> UserRooms { get; set; }
        public virtual List<ImageResponse> Images { get; set; }
    }
}
