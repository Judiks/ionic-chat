using despatch.Domain.Enums;

namespace despatch.Domain.Entities
{
    public class Url : BaseEntity
    {
        public string Path { get; set; }
        public UrlType Type { get; set; }
    }
}
