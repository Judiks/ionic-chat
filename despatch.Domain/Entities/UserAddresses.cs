using despatch.Domain.Enums;

namespace despatch.Domain.Entities
{
    public class UserAddresses : BaseEntity
    {
        public string UserId { get; set; }
        public string AddressId { get; set; }
        public virtual User User { get; set; }
        public virtual Address Address { get; set; }
    }
}
