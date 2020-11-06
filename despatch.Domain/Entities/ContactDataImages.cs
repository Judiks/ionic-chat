using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Entities
{
    public class ContactDataImages : BaseEntity
    {
        public string ContactDataId { get; set; }
        public string ImageId { get; set; }
        public virtual ContactData ContactData { get; set; }
        public virtual Image Image { get; set; }
    }
}
