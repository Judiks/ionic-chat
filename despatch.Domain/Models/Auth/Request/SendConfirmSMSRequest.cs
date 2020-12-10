namespace despatch.Domain.Models.Auth.Request
{
    public class SendConfirmSMSRequest
    {
        public string PhoneNumber { get; set; }
        public string Hash { get; set; }
    }
}
