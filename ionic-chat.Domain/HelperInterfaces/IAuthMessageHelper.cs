using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ionic_chat.Domain.HelperInterfaces
{
    public interface IAuthMessageHelper
    {
        Task SendSmsAsync(string number, string message);
        Task SendEmailAsync(string email, string subject, string message);
    }
}
