using System;
using System.Collections.Generic;

namespace despatch.Domain.Exсeptions
{
    public class AppExсeption : Exception
    {
        public int? StatusCode { get; set; }
        public AppExсeption(string message) : base(message)
        {
        }

        public AppExсeption(List<string> messages) : base(string.Join(", ", messages.ToArray()))
        {
        }
        public AppExсeption(int? statusCode, string message) : base(message)
        {
            StatusCode = statusCode;
        }
    }
}
