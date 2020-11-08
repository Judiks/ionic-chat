using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        public virtual ICollection<ContactDataAddresses> Addresses { get; set; }
        public virtual ICollection<ContactDataOrganizations> Organizations { get; set; }
        public virtual ICollection<ContactDataImages> Images { get; set; }
        public virtual ICollection<ContactDataPhoneNumbers> PhoneNumbers { get; set; }
        public virtual ICollection<ContactDataUrls> Urls { get; set; }
    }
}
