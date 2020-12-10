namespace despatch.Domain.Entities
{
    public class UserRoom : BaseEntity
    {
        public string MissedMessagesCount { get; set; }
        public string RoomId { get; set; }
        public string ContactId { get; set; }
        public virtual Room Room { get; set; }
        public virtual Contact Contact { get; set; }

    }
}
