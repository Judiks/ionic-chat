namespace ionic_chat.Domain.Models.Default.Request
{
    public class UserRoomRequest
    {
        public string UserId { get; set; }
        public string ChatId { get; set; }
        public virtual UserRequest User { get; set; }
        public virtual RoomRequest Room { get; set; }
    }
}
