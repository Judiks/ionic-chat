namespace despatch.Domain.Models.Default.Response
{
    public class UserRoomsResponse : BaseEntityResponse
    {
        public string MissedMessagesCount { get; set; }

        public string UserId { get; set; }
        public string RoomId { get; set; }

        public virtual UserResponse User { get; set; }
        public virtual RoomResponse Room { get; set; }

    }
}
