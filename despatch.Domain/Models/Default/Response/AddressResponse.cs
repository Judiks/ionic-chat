using despatch.Domain.Enums;

namespace despatch.Domain.Models.Default.Response
{
    public class AddressResponse : BaseEntityResponse
    {
        public string DeviceName { get; set; }
        public AddressType? Type { get; set; }
    }
}
