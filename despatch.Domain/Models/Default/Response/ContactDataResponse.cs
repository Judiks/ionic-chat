using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Models.Default.Response
{
    public class ContactDataResponse : BaseEntityResponse
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

        public ICollection<ContactDataAddressesResponse> Addresses { get; set; }
        public ICollection<ContactDataOrganizationsResponse> Organizations { get; set; }
        public ICollection<ContactDataImagesResponse> Images { get; set; }
        public ICollection<ContactDataPhoneNumbersResponse> PhoneNumbers { get; set; }
        public ICollection<ContactDataUrlsResponse> Urls { get; set; }
    }
}
