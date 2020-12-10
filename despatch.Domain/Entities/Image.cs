using despatch.Domain.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace despatch.Domain.Entities
{
    public class Image : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public ImageType Type { get; set; }
        public bool IsMain { get; set; }
        public string DeviceUrlId { get; set; }
        public string SourseUrlId { get; set; }
        [ForeignKey("DeviceUrlId")]
        public virtual Url DeviceUrl { get; set; }
        [ForeignKey("SourseUrlId")]
        public virtual Url SourceUrl { get; set; }
    }
}
