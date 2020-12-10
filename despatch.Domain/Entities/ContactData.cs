using System;
using System.Collections.Generic;

namespace despatch.Domain.Entities
{
    public class ContactData : BaseEntity
    {
        public string DisplayName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string HonorificPrefix { get; set; }
        public string HonorificSuffix { get; set; }
        public string Nickname { get; set; }
        public string Note { get; set; }
        public DateTime? BirthdayDate { get; set; }
        public string Email { get; set; }
        public virtual ICollection<ContactDataAddress> Addresses { get; set; }
        public virtual ICollection<ContactDataOrganization> Organizations { get; set; }
        public virtual ICollection<ContactDataImage> Images { get; set; }
        public virtual ICollection<ContactDataPhoneNumber> PhoneNumbers { get; set; }
        public virtual ICollection<ContactDataUrl> Urls { get; set; }
    }
}
