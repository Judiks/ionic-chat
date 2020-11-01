using despatch.Domain.Constants;
using despatch.Domain.Entities;
using despatch.Domain.Exсeptions;
using despatch.Domain.HelperInterfaces;
using despatch.Infrastructure.Options;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Infrastructure.Helpers
{
    public class JwtHelper: IJwtHelper
    {
        private readonly IOptions<AuthOption> _option;
        public JwtHelper(IOptions<AuthOption> option)
        {
            _option = option;
        }
        public string CreateToken(User user, string role, int expireDays)
        {
            var claims = new List<Claim> {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, role),
            };

            var key = new SymmetricSecurityKey(Encoding.ASCII
                .GetBytes(_option.Value.JwtKey));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(expireDays),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
