
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace despatch.Domain.Models.Default.Request
{
    public class UserRequest : IdentityUser
    {
        public DateTime CreationDate { get; set; }

        public string CityId { get; set; }
        public string CountryId { get; set; }

        public virtual CityRequest City { get; set; }
        public virtual CountryRequest Country { get; set; }

        public ICollection<UserAddressesRequest> Addresses { get; set; }
        public ICollection<UserOrganizationsRequest> Organizations { get; set; }
        public ICollection<UserImagesRequest> Images { get; set; }
        public ICollection<UserPhoneNumbersRequest> PhoneNumbers { get; set; }
        public ICollection<UserUrlsRequest> Urls { get; set; }

    }
}
