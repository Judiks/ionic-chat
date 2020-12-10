using despatch.Domain.Enums;

namespace despatch.Domain.Models.Default.Request
{
    public class UrlRequest : BaseEntityRequest
    {
        public string Path { get; set; }
        public UrlType Type { get; set; }
    }
}
