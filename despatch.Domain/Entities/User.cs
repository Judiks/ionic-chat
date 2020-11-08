
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

        public virtual City City { get; set; }
        public virtual Country Country { get; set; }

        public ICollection<UserAddresses> Addresses { get; set; }
        public ICollection<UserOrganizations> Organizations { get; set; }
        public ICollection<UserImages> Images { get; set; }
        public ICollection<UserPhoneNumbers> PhoneNumbers { get; set; }
        public ICollection<UserUrls> Urls { get; set; }
        public User()
        {
            Id = Guid.NewGuid().ToString();
            CreationDate = DateTime.UtcNow;
        }

    }
}
