using despatch.Domain.Enums;

namespace despatch.Domain.Models.Default.Request
{
    public class AddressRequest : BaseEntityRequest
    {
        public string DeviceName { get; set; }
        public AddressType? Type { get; set; }
    }
}
