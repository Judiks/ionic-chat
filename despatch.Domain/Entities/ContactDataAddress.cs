﻿namespace despatch.Domain.Entities
{
    public class ContactDataAddress : BaseEntity
    {
        public string ContactDataId { get; set; }
        public string AddressId { get; set; }
        public virtual ContactData ContactData { get; set; }
        public virtual Address Address { get; set; }
    }
}
