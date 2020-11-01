using despatch.Domain.Models.Default.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Models.Account.Response
{
    public class RefreshTokenResponse: UserResponse
    {
        public string AuthToken { get; set; }
        public string RefreshToken { get; set; }
    }
}
