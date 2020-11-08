using despatch.Domain.Enums;

namespace despatch.Domain.Models.Default.Response
{
    public class ContactDataAddressesResponse : BaseEntityResponse
    {
        public string AddressId { get; set; }
        public string ContactDataId { get; set; }

        public virtual AddressResponse Address { get; set; }
        public virtual ContactDataResponse ContactData { get; set; }
    }
}
