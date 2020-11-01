using despatch.Domain.Models.Enums;

namespace despatch.Domain.Models.Default.Request
{
    public class RoomRequest
    {
        public string Id { get; set; }
        public string CreatorId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Img { get; set; }
        public UserRequest Creator { get; set; }
        public RoomTypeModel Type { get; set; }
        public RoomPrivacyTypeModel PrivacyType { get; set; }
    }
}
