using despatch.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class Address : BaseEntity
    {
        public string DeviceName { get; set; }
        public AddressType? Type { get; set; }
    }
}
