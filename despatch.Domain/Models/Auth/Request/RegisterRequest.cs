using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Enums;

namespace despatch.Domain.Models.Auth.Request
{
    public class RegisterRequest : UserRequest
    {
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public Role Role { get; set; }
    }
}
