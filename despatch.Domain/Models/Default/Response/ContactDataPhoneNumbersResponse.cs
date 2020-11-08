using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Response
{
    public class ContactDataPhoneNumbersResponse : BaseEntityResponse
    {
        public string ContactDataId { get; set; }
        public string PhoneNumberId { get; set; }

        public virtual ContactDataResponse ContactData { get; set; }
        public virtual PhoneNumberResponse PhoneNumber { get; set; }
    }
}
