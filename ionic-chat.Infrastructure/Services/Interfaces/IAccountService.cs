using ionic_chat.Infrastructure.Models.Account.Request;
using ionic_chat.Infrastructure.Models.Account.Response;
using ionic_chat.Infrastructure.Models.Default.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ionic_chat.Infrastructure.Services.Interfaces
{
    public interface IAccountService
    {
        Task<RegisterResponse> Register(UserRequest model);
        Task Login(LoginRequest model);
    }
}
