using despatch.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Request
{
    public class AddressRequest : BaseEntityRequest
    {
        public string DeviceName { get; set; }
        public AddressType? Type { get; set; }
    }
}
