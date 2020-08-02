using ionic_chat.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ionic_chat.Domain.HelperInterfaces
{
    public interface IJwtHelper
    {
        string CreateToken(User user, string role);
    }
}
