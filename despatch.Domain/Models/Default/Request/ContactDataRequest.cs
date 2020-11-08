using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Models.Default.Request
{
    public class ContactDataRequest : BaseEntityRequest
    {
        public string DisplayName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string HonorificPrefix { get; set; }
        public string HonorificSuffix { get; set; }
        public string Nickname { get; set; }
        public string Note { get; set; }
        public string Email { get; set; }
        public DateTime? BirthdayDate { get; set; }

        public ICollection<ContactDataAddressesRequest> Addresses { get; set; }
        public ICollection<ContactDataOrganizationsRequest> Organizations { get; set; }
        public ICollection<ContactDataImagesRequest> Images { get; set; }
        public ICollection<ContactDataPhoneNumbersRequest> PhoneNumbers { get; set; }
        public ICollection<ContactDataUrlsRequest> Urls { get; set; }
    }
}
