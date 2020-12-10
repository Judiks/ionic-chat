using despatch.Domain.HelperInterfaces;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace despatch.Infrastructure.Helpers
{
    public class AuthHelper : IAuthHelper
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public AuthHelper(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetUserId()
        {
            // version error idk
            string userId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            return userId;
        }
    }
}
