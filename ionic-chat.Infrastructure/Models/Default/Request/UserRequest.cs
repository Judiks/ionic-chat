using System;

namespace ionic_chat.Infrastructure.Models.Default.Request
{
    public class UserRequest
    {
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime CreationDate { get; set; }

    }
}
