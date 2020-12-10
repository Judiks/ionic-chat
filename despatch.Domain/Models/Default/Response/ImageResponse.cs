using despatch.Domain.Enums;

namespace despatch.Domain.Models.Default.Response
{
    public class ImageResponse : BaseEntityResponse
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsMain { get; set; }
        public ImageType Type { get; set; }

        public string DeviceUrlId { get; set; }
        public string SourseUrlId { get; set; }

        public virtual UrlResponse DeviceUrl { get; set; }
        public virtual UrlResponse SourceUrl { get; set; }
    }
}
