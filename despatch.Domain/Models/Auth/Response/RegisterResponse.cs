using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Auth.Response
{
    public class RegisterResponse : UserResponse
    {
        public Role Role { get; set; }
    }
}
