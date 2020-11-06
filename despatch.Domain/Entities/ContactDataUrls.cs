using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class ContactDataUrls : BaseEntity
    {
        public string ContactDataId { get; set; }
        public string UrlId { get; set; }
        public virtual ContactData ContactData { get; set; }
        public virtual Url Url { get; set; }
    }
}
