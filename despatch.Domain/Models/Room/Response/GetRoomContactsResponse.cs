using despatch.Domain.Models.Default.Response;
using System.Collections.Generic;

namespace despatch.Domain.Models.Room.Response
{
    public class GetRoomContactsResponse
    {
        public List<ContactResponse> Contacts { get; set; }
    }
}
