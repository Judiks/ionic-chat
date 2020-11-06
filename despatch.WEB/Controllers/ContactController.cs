using despatch.Domain.Models.Contacts.Request;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using despatch.Domain.Models.Room.Request;
using despatch.Domain.Models.Room.Response;
using despatch.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.WEB.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ContactController : Controller
    {
        private readonly IContactService _contactService;
        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(List<ContactResponse>), StatusCodes.Status200OK)]
        public async Task<IActionResult> SaveAllFromNative(List<ContactRequest> model)
        {
            List<ContactResponse> response = await _contactService.SaveAllFromNative(model);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(List<ContactResponse>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetContactData(GetContactDataRequest model)
        {
            List<ContactResponse> response  = await _contactService.GetContactData(model);
            return Ok(response);
        }
    }
}
