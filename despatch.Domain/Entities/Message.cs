using System;

namespace despatch.Domain.Entities
{
    public class Message : BaseEntity
    {
        public string UserId { get; set; }
        public string RoomId { get; set; }

        public string Text { get; set; }
        public DateTime SendDate { get; set; }

        public virtual User User { get; set; }
        public virtual Room Room { get; set; }
    }
}
