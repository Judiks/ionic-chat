namespace ionic_chat.Domain.Entities
{
    public class UserRoom : BaseEntity
    {
        public string UserId { get; set; }
        public string ChatId { get; set; }
        public virtual User User { get; set; }
        public virtual Room Room { get; set; }
    }
}
