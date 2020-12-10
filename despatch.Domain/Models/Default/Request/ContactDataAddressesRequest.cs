namespace despatch.Domain.Models.Default.Request
{
    public class ContactDataAddressesRequest : BaseEntityRequest
    {
        public string AddressId { get; set; }
        public string ContactDataId { get; set; }

        public virtual AddressRequest Address { get; set; }
        public virtual ContactDataRequest ContactData { get; set; }
    }
}
