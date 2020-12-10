namespace despatch.Domain.Entities
{
    public class UserImage : BaseEntity
    {
        public string UserId { get; set; }
        public string ImageId { get; set; }
        public virtual User User { get; set; }
        public virtual Image Image { get; set; }
    }
}
