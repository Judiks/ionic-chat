using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class ContactDataPhoneNumbers : BaseEntity
    {
        public string ContactDataId { get; set; }
        public string PhoneNumberId { get; set; }
        public virtual ContactData ContactData { get; set; }
        public virtual PhoneNumber PhoneNumber { get; set; }
    }
}
