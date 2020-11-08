using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Response
{
    public class UserImagesResponse : BaseEntityResponse
    {
        public string UserId { get; set; }
        public string ImageId { get; set; }

        public virtual UserResponse User { get; set; }
        public virtual ImageResponse Image { get; set; }
    }
}
