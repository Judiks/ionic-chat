using ionic_chat.Domain.Models.Enums;

namespace ionic_chat.Domain.Models.Default.Response
{
    public class UserResponse
    {
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public RoleModel Role { get; set; }
    }
}
