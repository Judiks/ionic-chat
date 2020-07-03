using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ionic_chat.DAL.Exeptions
{
    public class UnauthorizeException : Exception
    {
        public UnauthorizeException(string message) : base(message)
        {

        }
    }
}
