namespace despatch.Domain.Entities
{
    public class UserRoom : BaseEntity
    {
        public string UserId { get; set; }
        public string RoomId { get; set; }
        public virtual User User { get; set; }
        public virtual Room Room { get; set; }
        public int? MissedMessages { get; set; }

    }
}
