using ionic_chat.Domain.Models.Account.Request;
using ionic_chat.Domain.Models.Default.Request;
using ionic_chat.Domain.Models.Default.Response;
using System.Threading.Tasks;

namespace ionic_chat.Domain.Services.Interfaces
{
    public interface IAccountService
    {
        Task<string> SendConfirmSMS(SendConfirmSMSRequest model);
        Task<UserResponse> CreateUser(UserRequest model);
        Task<string> Login(LoginRequest model);
    }
}
