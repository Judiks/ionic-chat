using System;

namespace ionic_chat.DAL.Entities
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
