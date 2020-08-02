using System;

namespace ionic_chat.Domain.Exeptions
{
    public class UnauthorizeException : Exception
    {
        public UnauthorizeException(string message) : base(message)
        {

        }
    }
}
