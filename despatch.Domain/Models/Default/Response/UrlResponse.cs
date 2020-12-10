using despatch.Domain.Enums;

namespace despatch.Domain.Models.Default.Response
{
    public class UrlResponse : BaseEntityResponse
    {
        public string Path { get; set; }
        public UrlType Type { get; set; }
    }
}
