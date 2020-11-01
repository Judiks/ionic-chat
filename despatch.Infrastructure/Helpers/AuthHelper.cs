using despatch.Domain.HelperInterfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Infrastructure.Helpers
{
    public class AuthHelper: IAuthHelper
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public AuthHelper(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetUserId()
        {
            // version error idk
            string userId = _httpContextAccessor.HttpContext.User.Claims.FirstOrDefault(c => c.Type == "nameid")?.Value;
            return userId;
        }
    }
}
