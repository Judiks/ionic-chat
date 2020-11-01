using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Models.Contacts.Request
{
    public class GetContactDataRequest
    {
        public string UserId { get; set; }
        public int SkipCount { get; set; }
    }
}
