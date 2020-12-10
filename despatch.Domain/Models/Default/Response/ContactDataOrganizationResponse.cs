namespace despatch.Domain.Models.Default.Response
{
    public class ContactDataOrganizationResponse : BaseEntityResponse
    {
        public string ContactDataId { get; set; }
        public string OrganizationId { get; set; }

        public virtual ContactDataResponse ContactData { get; set; }
        public virtual OrganizationResponse Organization { get; set; }
    }
}
