using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Models.Auth.Response
{
    public class LoginResponse: UserResponse
    {
        public string AuthToken { get; set; }
        public string RefreshToken { get; set; }
        public Role Role { get; set; }
    }
}
