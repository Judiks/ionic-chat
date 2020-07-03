using System.ComponentModel.DataAnnotations.Schema;

namespace ionic_chat.Infrastructure.Models.Default.Response
{
    public class RoomResponse
    {
        public string CreatorId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Img { get; set; }
        public UserResponse Creator { get; set; }
    }
}
