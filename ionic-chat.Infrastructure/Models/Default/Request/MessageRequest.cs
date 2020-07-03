namespace ionic_chat.Infrastructure.Models.Default.Request
{
    public class MessageRequest
    {
        public string UserId { get; set; }
        public string RoomId { get; set; }
        public virtual UserRequest User { get; set; }
        public virtual RoomRequest Room { get; set; }
    }
}
