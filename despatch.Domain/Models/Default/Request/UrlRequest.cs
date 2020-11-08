using despatch.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Request
{
    public class UrlRequest : BaseEntityRequest
    {
        public string Path { get; set; }
        public UrlType Type { get; set; }
    }
}
