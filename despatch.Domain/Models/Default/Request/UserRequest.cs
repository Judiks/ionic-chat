using despatch.Domain.Models.Enums;

namespace despatch.Domain.Models.Default.Request
{
    public class UserRequest
    {
        public string Id { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public RoleModel Role { get; set; }
    }
}
