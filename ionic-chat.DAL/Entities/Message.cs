namespace ionic_chat.DAL.Entities
{
    public class Message : BaseEntity
    {
        public string UserId { get; set; }
        public string RoomId { get; set; }
        public virtual User User { get; set; }
        public virtual Room Room { get; set; }
    }
}
