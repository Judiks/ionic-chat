using System;
using System.Collections.Generic;

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

        public List<ContactDataAddressesResponse> Addresses { get; set; }
        public List<ContactDataOrganizationResponse> Organizations { get; set; }
        public List<ContactDataImageResponse> Images { get; set; }
        public List<ContactDataPhoneNumberResponse> PhoneNumbers { get; set; }
        public List<ContactDataUrlsResponse> Urls { get; set; }
    }
}
