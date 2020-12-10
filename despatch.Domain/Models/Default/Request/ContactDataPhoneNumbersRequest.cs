namespace despatch.Domain.Models.Default.Request
{
    public class ContactDataPhoneNumbersRequest : BaseEntityRequest
    {
        public string ContactDataId { get; set; }
        public string PhoneNumberId { get; set; }

        public virtual ContactDataRequest ContactData { get; set; }
        public virtual PhoneNumberRequest PhoneNumber { get; set; }
    }
}
