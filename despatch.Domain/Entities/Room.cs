using despatch.Domain.Models.Enums;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace despatch.Domain.Entities
{
    public class Room : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public RoomType Type { get; set; }
        public RoomPrivacyType PrivacyType { get; set; }

        public string CreatorId { get; set; }
        public string LastMessageId { get; set; }

        public User Creator { get; set; }
        [ForeignKey("LastMessageId")]
        public Message LastMessage { get; set; }

        [ForeignKey("RoomId")]
        public virtual ICollection<UserRoom> UserRooms { get; set; }
        public virtual ICollection<RoomImage> RoomImages { get; set; }
    }
}
