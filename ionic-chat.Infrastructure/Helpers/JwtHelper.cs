using ionic_chat.Domain.Constants;
using ionic_chat.Domain.Entities;
using ionic_chat.Domain.Exсeptions;
using ionic_chat.Domain.HelperInterfaces;
using ionic_chat.Infrastructure.Options;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ionic_chat.Infrastructure.Helpers
{
    public class JwtHelper: IJwtHelper
    {
        private readonly IOptions<AuthOption> _option;
        public JwtHelper(IOptions<AuthOption> option)
        {
            _option = option;
        }
        public string CreateToken(User user, string role)
        {
            List<Claim> claims = new List<Claim> {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, role),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_option.Value.JwtKey));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
