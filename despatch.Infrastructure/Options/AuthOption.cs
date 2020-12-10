using System;

namespace despatch.Infrastructure.Options
{
    public class AuthOption
    {
        public string JwtKey { get; set; }
        public TimeSpan AccessTokenExpiration { get; set; }
        public TimeSpan RefreshTokenExpiration { get; set; }

        public AuthOption()
        {
            AccessTokenExpiration = TimeSpan.FromMinutes(10);
            RefreshTokenExpiration = TimeSpan.FromDays(60);
        }
    }
}
