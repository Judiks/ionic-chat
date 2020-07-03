using System.ComponentModel.DataAnnotations.Schema;

namespace ionic_chat.Infrastructure.Models.Default.Request
{
    public class RoomRequest
    {
        public string CreatorId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Img { get; set; }
        public UserRequest Creator { get; set; }
    }
}
