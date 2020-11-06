using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class Organization : BaseEntity
    {
        public string Name { get; set; }
        public string Position { get; set; }
    }
}
