namespace despatch.Domain.Models.Default.Response
{
    public class UserRoomResponse : BaseEntityResponse
    {
        public string MissedMessagesCount { get; set; }

        public string UserId { get; set; }
        public string RoomId { get; set; }

        public UserResponse User { get; set; }
        public RoomResponse Room { get; set; }
        public ContactResponse Contact { get; set; }
    }
}
