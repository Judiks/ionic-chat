using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Request
{
    public class ContactDataUrlsRequest : BaseEntityRequest
    {
        public string UrlId { get; set; }
        public string ContactDataId { get; set; }

        public virtual UrlRequest Url { get; set; }
        public virtual ContactDataRequest ContactData { get; set; }
    }
}
