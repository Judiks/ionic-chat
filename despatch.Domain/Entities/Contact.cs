using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace despatch.Domain.Entities
{
    public class Contact : BaseEntity
    {
        public string ContactDataId { get; set; }
        public string FriendId { get; set; }
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        [ForeignKey("FriendId")]
        public virtual User Friend { get; set; }
        public virtual ContactData ContactData { get; set; }
    }
}
