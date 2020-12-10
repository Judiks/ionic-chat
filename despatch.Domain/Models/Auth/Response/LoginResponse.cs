using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Enums;

namespace despatch.Domain.Models.Auth.Response
{
    public class LoginResponse : UserResponse
    {
        public string AuthToken { get; set; }
        public string RefreshToken { get; set; }
        public Role Role { get; set; }
    }
}
