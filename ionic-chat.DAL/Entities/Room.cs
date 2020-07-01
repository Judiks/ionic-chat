using System.ComponentModel.DataAnnotations.Schema;

namespace ionic_chat.DAL.Entities
{
    public class Room : BaseEntity
    {
        [ForeignKey(nameof(User))]
        public string CreatorId { get; set; }
        public User Creator { get; set; }
    }
}
