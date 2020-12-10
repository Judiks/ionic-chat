namespace despatch.Domain.Models.Default.Response
{
    public class UserAddressResponse : BaseEntityResponse
    {
        public string UserId { get; set; }
        public string AddressId { get; set; }

        public virtual UserResponse User { get; set; }
        public virtual AddressResponse Address { get; set; }
    }
}
