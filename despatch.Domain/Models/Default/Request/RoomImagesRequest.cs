using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Request
{
    public class RoomImagesRequest : BaseEntityRequest
    {
        public string RoomId { get; set; }
        public string ImageId { get; set; }

        public virtual RoomRequest Room { get; set; }
        public virtual ImageRequest Image { get; set; }
    }
}
