using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class UserOrganizations : BaseEntity
    {
        public string ContactDataId { get; set; }
        public string OrganizationId { get; set; }
        public virtual User User { get; set; }
        public virtual Organization Organization { get; set; }
    }
}
