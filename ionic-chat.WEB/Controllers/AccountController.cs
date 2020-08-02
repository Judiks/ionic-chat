using ionic_chat.Domain.Models.Account.Request;
using ionic_chat.Domain.Models.Default.Request;
using ionic_chat.Domain.Models.Default.Response;
using ionic_chat.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
using System.Threading.Tasks;

namespace ionic_chat.WEB.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status200OK)]
        [Produces("application/json")]
        [Authorize(Roles = "SuperAdmin")]
        public async Task<IActionResult> CreateUser(UserRequest model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var response = await _accountService.CreateUser(model);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status200OK)]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginRequest model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var response = await _accountService.Login(model);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
        [AllowAnonymous]
        public async Task<IActionResult> SendRegisterSMS(SendConfirmSMSRequest model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _accountService.SendConfirmSMS(model);
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [AllowAnonymous]
        public async Task<IActionResult> CheckUserName(string model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _accountService.CheckUserName(model);
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [Produces("application/json")]
        [AllowAnonymous]
        public async Task<IActionResult> CheckUserEmail(string model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _accountService.CheckEmail(model);
            return Ok(result);
        }
    }
}
