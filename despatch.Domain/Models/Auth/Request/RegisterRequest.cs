using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Models.Auth.Request
{
    public class RegisterRequest: UserRequest
    {
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public Role Role { get; set; }
    }
}
