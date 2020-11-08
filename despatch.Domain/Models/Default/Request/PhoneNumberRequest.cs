using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Request
{
    public class PhoneNumberRequest : BaseEntityRequest
    {
        public string Number { get; set; }
    }
}
