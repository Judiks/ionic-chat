using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class UserPhoneNumbers : BaseEntity
    {
        public string UserId { get; set; }
        public string PhoneNumberId { get; set; }
        public virtual User User { get; set; }
        public virtual PhoneNumber PhoneNumber { get; set; }
    }
}
