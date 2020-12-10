namespace despatch.Domain.Models.Default.Request
{
    public class ContactDataImagesRequest : BaseEntityRequest
    {
        public string ContactDataId { get; set; }
        public string ImageId { get; set; }

        public virtual ContactDataRequest ContactData { get; set; }
        public virtual ImageRequest Image { get; set; }
    }
}
