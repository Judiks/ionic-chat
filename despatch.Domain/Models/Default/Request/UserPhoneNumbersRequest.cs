namespace despatch.Domain.Models.Default.Request
{
    public class UserPhoneNumbersRequest : BaseEntityRequest
    {
        public string UserId { get; set; }
        public string PhoneNumberId { get; set; }

        public virtual UserRequest User { get; set; }
        public virtual PhoneNumberRequest PhoneNumber { get; set; }
    }
}
