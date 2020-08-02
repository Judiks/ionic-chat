using System.ComponentModel.DataAnnotations.Schema;

namespace ionic_chat.Domain.Entities
{
    public class Room : BaseEntity
    {
        [ForeignKey(nameof(User))]
        public string CreatorId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Img { get; set; }
        public User Creator { get; set; }
    }
}
