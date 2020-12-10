namespace despatch.Domain.Models.Default.Response
{
    public class RoomImageResponse : BaseEntityResponse
    {
        public string RoomId { get; set; }
        public string ImageId { get; set; }

        public virtual RoomResponse Room { get; set; }
        public virtual ImageResponse Image { get; set; }
    }
}
