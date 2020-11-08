using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Response
{
    public class UserUrlsResponse : BaseEntityResponse
    {
        public string UserId { get; set; }
        public string UrlId { get; set; }

        public virtual UserResponse User { get; set; }
        public virtual UrlResponse Url { get; set; }
    }
}
