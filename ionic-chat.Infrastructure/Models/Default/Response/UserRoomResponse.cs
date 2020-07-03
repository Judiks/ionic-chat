namespace ionic_chat.Infrastructure.Models.Default.Response
{
    public class UserRoomResponse
    {
        public string UserId { get; set; }
        public string ChatId { get; set; }
        public virtual UserResponse User { get; set; }
        public virtual RoomResponse Room { get; set; }
    }
}
