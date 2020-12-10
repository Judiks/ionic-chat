using despatch.Domain.Models.Contacts.Request;
using despatch.Domain.Models.Contacts.Response;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.WEB.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class ContactController : Controller
    {
        private readonly IContactService _contactService;
        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(List<SyncContactResponse>), StatusCodes.Status200OK)]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> SaveAllFromNative(List<SyncContactRequest> model)
        {
            List<SyncContactResponse> response = await _contactService.SyncAllFromNative(model);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(List<ContactResponse>), StatusCodes.Status200OK)]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetContactData(GetContactDataRequest model)
        {
            List<ContactResponse> response = await _contactService.GetPaginDataByUserId(model);
            return Ok(response);
        }
    }
}
