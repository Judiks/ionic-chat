using despatch.Domain.Models.Account.Request;
using despatch.Domain.Models.Account.Response;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using System.Threading.Tasks;

namespace despatch.Domain.Services.Interfaces
{
    public interface IAuthService
    {
        Task<bool> CheckUserName(string userName);
        Task<bool> CheckEmail(string email);
        Task<string> SendConfirmSMS(SendConfirmSMSRequest model);
        Task<UserResponse> Register(RegisterRequest model);
        Task<LoginResponse> Login(LoginRequest model);
        Task Logout();
        Task<RefreshTokenResponse> RefreshToken(RefreshTokenRequest model);
    }
}
