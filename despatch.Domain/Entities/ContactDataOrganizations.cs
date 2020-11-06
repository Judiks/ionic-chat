using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class ContactDataOrganizations : BaseEntity
    {
        public string ContactDataId { get; set; }
        public string OrganizationId { get; set; }
        public virtual ContactData ContactData { get; set; }
        public virtual Organization Organization { get; set; }
    }
}
