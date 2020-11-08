using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Response
{
    public class UserOrganizationsResponse : BaseEntityResponse
    {
        public string ContactDataId { get; set; }
        public string OrganizationId { get; set; }

        public virtual UserResponse User { get; set; }
        public virtual OrganizationResponse Organization { get; set; }
    }
}
