
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

        public ICollection<UserAddresse> Addresses { get; set; }
        public ICollection<UserOrganization> Organizations { get; set; }
        public ICollection<UserImage> Images { get; set; }
        public ICollection<UserPhoneNumber> PhoneNumbers { get; set; }
        public ICollection<UserUrl> Urls { get; set; }
        public User()
        {
            Id = Guid.NewGuid().ToString();
            CreationDate = DateTime.UtcNow;
        }

    }
}
