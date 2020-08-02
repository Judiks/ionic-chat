namespace ionic_chat.Domain.Models.Default.Response
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
