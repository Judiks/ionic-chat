namespace despatch.Domain.Models.Default.Request
{
    public class UserAddressesRequest : BaseEntityRequest
    {
        public string UserId { get; set; }
        public string AddressId { get; set; }

        public virtual UserRequest User { get; set; }
        public virtual AddressRequest Address { get; set; }
    }
}
