using System;

namespace despatch.Core.Exeptions
{
    public class UnauthorizeException : Exception
    {
        public UnauthorizeException(string message) : base(message)
        {

        }
    }
}
