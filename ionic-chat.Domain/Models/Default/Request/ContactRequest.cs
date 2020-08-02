﻿namespace ionic_chat.Domain.Models.Default.Request
{
    public class ContactRequest
    {
        public string FriendId { get; set; }
        public string UserId { get; set; }
        public virtual UserRequest User { get; set; }
        public virtual UserRequest Friend { get; set; }
    }
}