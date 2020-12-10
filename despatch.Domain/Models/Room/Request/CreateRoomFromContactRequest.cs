using despatch.Domain.Models.Default.Request;

namespace despatch.Domain.Models.Room.Request
{
    public class CreateRoomFromContactRequest
    {
        public ContactRequest Contact { get; set; }
    }
}
