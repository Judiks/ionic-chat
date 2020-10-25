using ionic_chat.Domain.Models.Account.Request;
using ionic_chat.Domain.Models.Account.Response;
using ionic_chat.Domain.Models.Default.Request;
using ionic_chat.Domain.Models.Default.Response;
using System.Threading.Tasks;

namespace ionic_chat.Domain.Services.Interfaces
{
    public interface IAccountService
    {
        Task<bool> CheckUserName(string userName);
        Task<bool> CheckEmail(string email);
        Task<string> SendConfirmSMS(SendConfirmSMSRequest model);
        Task<UserResponse> Register(RegisterRequest model);
        Task<LoginResponse> Login(LoginRequest model);
    }
}
