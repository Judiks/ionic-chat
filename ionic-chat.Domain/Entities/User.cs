
using Microsoft.AspNetCore.Identity;
using System;

namespace ionic_chat.Domain.Entities
{
    public class User : IdentityUser
    {
        public DateTime CreationDate { get; set; }
        public User()
        {
            Id = Guid.NewGuid().ToString();
            CreationDate = DateTime.UtcNow;
        }

    }
}
