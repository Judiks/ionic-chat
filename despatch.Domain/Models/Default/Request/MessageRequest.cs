using System;

namespace despatch.Domain.Models.Default.Request
{
    public class MessageRequest : BaseEntityRequest
    {
        public string Text { get; set; }
        public DateTime SendDate { get; set; }

        public string UserId { get; set; }
        public string RoomId { get; set; }

        public virtual UserRequest User { get; set; }
        public virtual RoomRequest Room { get; set; }
    }
}
