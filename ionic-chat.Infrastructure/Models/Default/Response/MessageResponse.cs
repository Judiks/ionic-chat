namespace ionic_chat.Infrastructure.Models.Default.Response
{
    public class MessageResponse
    {
        public string UserId { get; set; }
        public string RoomId { get; set; }
        public virtual UserResponse User { get; set; }
        public virtual RoomResponse Room { get; set; }
    }
}
