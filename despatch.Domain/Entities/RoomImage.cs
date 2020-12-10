namespace despatch.Domain.Entities
{
    public class RoomImage : BaseEntity
    {
        public string RoomId { get; set; }
        public string ImageId { get; set; }

        public virtual Room Room { get; set; }
        public virtual Image Image { get; set; }
    }
}
