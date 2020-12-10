using despatch.Domain.Enums;

namespace despatch.Domain.Models.Default.Request
{
    public class ImageRequest : BaseEntityRequest
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public ImageType Type { get; set; }
        public bool IsMain { get; set; }

        public string DeviceUrlId { get; set; }
        public string SourseUrlId { get; set; }

        public virtual UrlRequest DeviceUrl { get; set; }
        public virtual UrlRequest SourceUrl { get; set; }
    }
}
