using despatch.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class Image : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int? DeviceUrlId { get; set; }
        public int? SourseUrlId { get; set; }
        public ImageType Type { get; set; }
    }
}
