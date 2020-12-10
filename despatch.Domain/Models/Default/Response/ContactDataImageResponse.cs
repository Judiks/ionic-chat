namespace despatch.Domain.Models.Default.Response
{
    public class ContactDataImageResponse : BaseEntityResponse
    {
        public string ContactDataId { get; set; }
        public string ImageId { get; set; }

        public virtual ContactDataResponse ContactData { get; set; }
        public virtual ImageResponse Image { get; set; }
    }
}
