using despatch.Domain.Models.Enums;

namespace despatch.Domain.Models.Default.Response
{
    public class UserResponse
    {
        public string Id { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public RoleModel Role { get; set; }
    }
}
