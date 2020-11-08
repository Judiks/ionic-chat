using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Response
{
    public class OrganizationResponse : BaseEntityResponse
    {
        public string Name { get; set; }
        public string Position { get; set; }
    }
}
