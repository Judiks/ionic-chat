using despatch.Domain.Models.Enums;
using System.Collections.Generic;

namespace despatch.Domain.Models.Default.Request
{
    public class RoomRequest : BaseEntityRequest
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public RoomType Type { get; set; }
        public RoomPrivacyType PrivacyType { get; set; }

        public string CreatorId { get; set; }
        public string LastMessageId { get; set; }

        public UserRequest Creator { get; set; }
        public MessageRequest LastMessage { get; set; }

        public virtual ICollection<UserRoomsRequest> UserRooms { get; set; }
        public virtual ICollection<ImageRequest> Images { get; set; }
    }
}
