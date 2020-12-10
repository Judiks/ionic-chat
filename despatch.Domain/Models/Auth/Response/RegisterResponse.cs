using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Enums;

namespace despatch.Domain.Models.Auth.Response
{
    public class RegisterResponse : UserResponse
    {
        public Role Role { get; set; }
    }
}
