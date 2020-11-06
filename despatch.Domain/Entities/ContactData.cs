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
        ICollection<ContactDataAddresses> Addresses { get; set; }
        ICollection<ContactDataOrganizations> Organizations { get; set; }
        ICollection<ContactDataImages> Images { get; set; }
        ICollection<ContactDataPhoneNumbers> PhoneNumbers { get; set; }
        ICollection<ContactDataUrls> Urls { get; set; }
    }
}
