using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Response
{
    public class RoomImagesResponse : BaseEntityResponse
    {
        public string RoomId { get; set; }
        public string ImageId { get; set; }

        public virtual RoomResponse Room { get; set; }
        public virtual ImageResponse Image { get; set; }
    }
}
