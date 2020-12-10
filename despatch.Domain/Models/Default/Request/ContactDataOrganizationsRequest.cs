namespace despatch.Domain.Models.Default.Request
{
    public class ContactDataOrganizationsRequest : BaseEntityRequest
    {
        public string ContactDataId { get; set; }
        public string OrganizationId { get; set; }

        public virtual ContactDataRequest ContactData { get; set; }
        public virtual OrganizationRequest Organization { get; set; }
    }
}
