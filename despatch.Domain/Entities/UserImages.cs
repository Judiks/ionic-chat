using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class UserImages : BaseEntity
    {
        public string UserId { get; set; }
        public string ImageId { get; set; }
        public virtual User User { get; set; }
        public virtual Image Image { get; set; }
    }
}
