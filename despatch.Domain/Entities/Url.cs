using despatch.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class Url : BaseEntity
    {
        public string Path { get; set; }
        public UrlType Type { get; set; }
    }
}
