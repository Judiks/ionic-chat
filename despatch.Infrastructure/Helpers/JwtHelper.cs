using despatch.Domain.Entities;
using despatch.Domain.HelperInterfaces;
using despatch.Infrastructure.Options;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace despatch.Infrastructure.Helpers
{
    public class JwtHelper : IJwtHelper
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

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = new JwtSecurityToken(
                    claims: new ClaimsIdentity(claims, JwtBearerDefaults.AuthenticationScheme, ClaimTypes.Name,
                        ClaimTypes.Role).Claims,
                    expires: DateTime.Now.AddDays(expireDays),
                    signingCredentials: creds);
            return tokenHandler.WriteToken(token);
        }
    }
}

