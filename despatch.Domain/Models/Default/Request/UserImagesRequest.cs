using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Request
{
    public class UserImagesRequest : BaseEntityRequest
    {
        public string UserId { get; set; }
        public string ImageId { get; set; }

        public virtual UserRequest User { get; set; }
        public virtual ImageRequest Image { get; set; }
    }
}
