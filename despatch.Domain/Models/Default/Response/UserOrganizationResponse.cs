namespace despatch.Domain.Models.Default.Response
{
    public class UserOrganizationResponse : BaseEntityResponse
    {
        public string ContactDataId { get; set; }
        public string OrganizationId { get; set; }

        public virtual UserResponse User { get; set; }
        public virtual OrganizationResponse Organization { get; set; }
    }
}
