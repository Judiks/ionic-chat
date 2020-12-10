namespace despatch.Domain.Models.Default.Request
{
    public class UserUrlsRequest : BaseEntityRequest
    {
        public string UserId { get; set; }
        public string UrlId { get; set; }

        public virtual UserRequest User { get; set; }
        public virtual UrlRequest Url { get; set; }
    }
}
