
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace despatch.Domain.Entities
{
    public class User : IdentityUser
    {
        public DateTime CreationDate { get; set; }
        public string CityId { get; set; }
        public string CountryId { get; set; }
        ICollection<UserAddresses> Addresses { get; set; }
        ICollection<UserOrganizations> Organizations { get; set; }
        ICollection<UserImages> Images { get; set; }
        ICollection<UserPhoneNumbers> PhoneNumbers { get; set; }
        ICollection<UserUrls> Urls { get; set; }
        public User()
        {
            Id = Guid.NewGuid().ToString();
            CreationDate = DateTime.UtcNow;
        }

    }
}
