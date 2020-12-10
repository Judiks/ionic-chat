namespace despatch.Domain.Entities
{
    public class UserPhoneNumber : BaseEntity
    {
        public string UserId { get; set; }
        public string PhoneNumberId { get; set; }
        public virtual User User { get; set; }
        public virtual PhoneNumber PhoneNumber { get; set; }
    }
}
