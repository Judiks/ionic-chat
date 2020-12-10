
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace despatch.Domain.Models.Default.Response
{
    public class UserResponse : IdentityUser
    {
        public DateTime CreationDate { get; set; }

        public string CityId { get; set; }
        public string CountryId { get; set; }

        public virtual CityResponse City { get; set; }
        public virtual CountryResponse Country { get; set; }

        public ICollection<UserAddressResponse> Addresses { get; set; }
        public ICollection<UserOrganizationResponse> Organizations { get; set; }
        public ICollection<UserImageResponse> Images { get; set; }
        public ICollection<UserPhoneNumbersResponse> PhoneNumbers { get; set; }
        public ICollection<UserUrlsResponse> Urls { get; set; }

    }
}
