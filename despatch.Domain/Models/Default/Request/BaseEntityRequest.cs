using System;

namespace despatch.Domain.Models.Default.Request
{
    public class BaseEntityRequest
    {
        public string Id { get; set; }
        public DateTime CreatingDate { get; set; }
    }
}
