using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Request
{
    public class UserOrganizationsRequest : BaseEntityRequest
    {
        public string ContactDataId { get; set; }
        public string OrganizationId { get; set; }

        public virtual UserRequest User { get; set; }
        public virtual OrganizationRequest Organization { get; set; }
    }
}
