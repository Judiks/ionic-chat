using despatch.Domain.Models.Account.Request;
using despatch.Domain.Models.Account.Response;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace despatch.WEB.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [AllowAnonymous]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> Register(RegisterRequest model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            UserResponse response = await _authService.Register(model);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(LoginResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> Login(LoginRequest model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            LoginResponse response = await _authService.Login(model);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
        public async Task<IActionResult> SendRegisterSMS(SendConfirmSMSRequest model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _authService.SendConfirmSMS(model);
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        public async Task<IActionResult> CheckUserName(string model)
        {
            if (!ModelState.IsValid || model is null)
            {
                return BadRequest();
            }
            var result = await _authService.CheckUserName(model);
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [Produces("application/json")]
        public async Task<IActionResult> CheckUserEmail(string model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _authService.CheckEmail(model);
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(RefreshTokenResponse), StatusCodes.Status200OK)]
        public async Task<ActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
        {
            RefreshTokenResponse response = await _authService.RefreshToken(request);
            return Ok(response);
        }


        [HttpPost]
        [ProducesResponseType(typeof(void), StatusCodes.Status200OK)]
        public async Task<IActionResult> Logout()
        {
            // удаляем аутентификационные куки
            await _authService.Logout();
            return Ok();
        }
    }

}