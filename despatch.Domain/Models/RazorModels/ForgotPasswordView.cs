using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Models.RazorModels
{
    public class ForgotPasswordView
    {
        public string UserName { get; set; }
        public string Link { get; set; }
    }
}
