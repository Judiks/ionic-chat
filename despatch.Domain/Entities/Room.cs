using despatch.Domain.Models.Enums;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace despatch.Domain.Entities
{
    public class Room : BaseEntity
    {
        [ForeignKey(nameof(User))]
        public string CreatorId { get; set; }
        public string LastMessageId { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Img { get; set; }
        public RoomTypeModel Type { get; set; }
        public RoomPrivacyTypeModel PrivacyType { get; set;  }

        public User Creator { get; set; }
        [ForeignKey("RoomId")]
        public virtual ICollection<UserRoom> UserRooms { get; set; }
        [ForeignKey("LastMessageId")]
        public Message LastMessage { get; set; }
    }
}
