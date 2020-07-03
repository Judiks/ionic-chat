using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ionic_chat.DAL.Exeptions
{
    public class AppExeption: Exception
    {
        public int? StatusCode { get; set; }
        public AppExeption(string message) : base(message)
        {
        }

        public AppExeption(List<string> messages) : base(string.Join(", ", messages.ToArray()))
        {
        }
        public AppExeption(int? statusCode, string message) : base(message)
        {
            StatusCode = statusCode;
        }
    }
}
