namespace despatch.Domain.Models.Default.Response
{
    public class UserPhoneNumbersResponse : BaseEntityResponse
    {
        public string UserId { get; set; }
        public string PhoneNumberId { get; set; }

        public virtual UserResponse User { get; set; }
        public virtual PhoneNumberResponse PhoneNumber { get; set; }
    }
}
