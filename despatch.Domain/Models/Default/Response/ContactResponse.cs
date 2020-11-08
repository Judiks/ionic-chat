namespace despatch.Domain.Models.Default.Response
{
    public class ContactResponse : BaseEntityResponse
    {
        public string UserId { get; set; }
        public string FriendId { get; set; }
        public string ContactDataId { get; set; }


        public virtual UserResponse User { get; set; }
        public virtual UserResponse Friend { get; set; }
        public ContactDataResponse ContactData { get; set; }
    }
}
