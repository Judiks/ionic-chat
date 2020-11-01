using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.HelperInterfaces
{
    public interface IAuthMessageHelper
    {
        Task SendSmsAsync(string number, string message);
    }
}
