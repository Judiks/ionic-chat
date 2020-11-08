using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Request
{
    public class OrganizationRequest : BaseEntityRequest
    {
        public string Name { get; set; }
        public string Position { get; set; }
    }
}
