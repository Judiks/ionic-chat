using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class UserUrls : BaseEntity
    {
        public string UserId { get; set; }
        public string UrlId { get; set; }
        public virtual User User { get; set; }
        public virtual Url Url { get; set; }
    }
}
