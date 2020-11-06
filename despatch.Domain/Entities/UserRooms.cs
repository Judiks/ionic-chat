namespace despatch.Domain.Entities
{
    public class UserRooms : BaseEntity
    {
        public string MissedMessagesCount { get; set; }
        public string UserId { get; set; }
        public string RoomId { get; set; }
        public virtual User User { get; set; }
        public virtual Room Room { get; set; }

    }
}
