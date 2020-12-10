namespace despatch.Domain.Entities
{
    public class ContactDataUrl : BaseEntity
    {
        public string ContactDataId { get; set; }
        public string UrlId { get; set; }
        public virtual ContactData ContactData { get; set; }
        public virtual Url Url { get; set; }
    }
}
