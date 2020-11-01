using System;

namespace despatch.Domain.Entities
{
    public class BaseEntity
    {
        public string Id { get; set; }
        public DateTime CreatingDate { get; set; }
        public BaseEntity()
        {
            Id = Guid.NewGuid().ToString();
            CreatingDate = DateTime.Now;
        }
    }
}
