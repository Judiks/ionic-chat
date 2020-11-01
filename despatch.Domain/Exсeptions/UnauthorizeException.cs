using System;

namespace despatch.Domain.Exeptions
{
    public class UnauthorizeException : Exception
    {
        public UnauthorizeException(string message) : base(message)
        {

        }
    }
}
