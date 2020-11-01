namespace despatch.Domain.Models.Default.Response
{
    public class ContactResponse
    {
        public string ContactDataId { get; set; }
        public string FriendId { get; set; }
        public string UserId { get; set; }
        public ContactDataResponse ContactData { get; set; }
        public virtual UserResponse User { get; set; }
        public virtual UserResponse Friend { get; set; }
    }
}
