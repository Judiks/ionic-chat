namespace despatch.Domain.Models.Default.Request
{
    public class UserRoomsRequest : BaseEntityRequest
    {
        public string MissedMessagesCount { get; set; }

        public string UserId { get; set; }
        public string RoomId { get; set; }

        public virtual UserRequest User { get; set; }
        public virtual RoomRequest Room { get; set; }

    }
}
