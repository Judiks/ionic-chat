using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Models.Account.Request
{
    public class SendConfirmSMSRequest
    {
        public string PhoneNumber { get; set; }
        public string Hash { get; set; }
    }
}
