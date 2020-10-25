using ionic_chat.Domain.Models.Default.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ionic_chat.Domain.Models.Account.Response
{
    public class LoginResponse: UserResponse
    {
        public string AuthToken { get; set; }
    }
}
