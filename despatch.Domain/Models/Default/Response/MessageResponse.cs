using System;

namespace despatch.Domain.Models.Default.Response
{
    public class MessageResponse : BaseEntityResponse
    {
        public string Text { get; set; }
        public DateTime SendDate { get; set; }

        public string UserId { get; set; }
        public string RoomId { get; set; }

        public virtual UserResponse User { get; set; }
        public virtual RoomResponse Room { get; set; }
    }
}
