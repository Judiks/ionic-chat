using System.ComponentModel.DataAnnotations.Schema;

namespace ionic_chat.DAL.Entities
{
    public class Contact : BaseEntity
    {
        [ForeignKey(nameof(Entities.User))]
        public string FriendId { get; set; }
        public string UserId { get; set; }
        public virtual User User { get; set; }
        public virtual User Friend { get; set; }
    }
}
