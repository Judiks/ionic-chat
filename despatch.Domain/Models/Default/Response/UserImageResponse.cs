namespace despatch.Domain.Models.Default.Response
{
    public class UserImageResponse : BaseEntityResponse
    {
        public string UserId { get; set; }
        public string ImageId { get; set; }

        public virtual UserResponse User { get; set; }
        public virtual ImageResponse Image { get; set; }
    }
}
