namespace despatch.Domain.Models.Default.Request
{
    public class ContactRequest : BaseEntityRequest
    {
        public string UserId { get; set; }
        public string FriendId { get; set; }
        public string ContactDataId { get; set; }


        public virtual UserRequest User { get; set; }
        public virtual UserRequest Friend { get; set; }
        public ContactDataRequest ContactData { get; set; }
    }
}
