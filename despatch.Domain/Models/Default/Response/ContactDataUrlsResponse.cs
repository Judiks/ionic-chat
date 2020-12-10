namespace despatch.Domain.Models.Default.Response
{
    public class ContactDataUrlsResponse : BaseEntityResponse
    {
        public string UrlId { get; set; }
        public string ContactDataId { get; set; }

        public virtual UrlResponse Url { get; set; }
        public virtual ContactDataResponse ContactData { get; set; }
    }
}
