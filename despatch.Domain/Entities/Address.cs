using despatch.Domain.Enums;

namespace despatch.Domain.Entities
{
    public class Address : BaseEntity
    {
        public string DeviceName { get; set; }
        public AddressType? Type { get; set; }
    }
}
