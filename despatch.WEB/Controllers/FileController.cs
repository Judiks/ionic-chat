using despatch.Domain.Models.File.Request;
using despatch.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace despatch.WEB.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FileController : Controller
    {
        private readonly IFileService _fileService;
        public FileController(IFileService fileService)
        {
            _fileService = fileService;
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Download(DownloadFileRequest request)
        {
            string filePath = $"wwwroot{request.Uri}";
            byte[] fileBytes = System.IO.File.ReadAllBytes(filePath);
            return File(fileBytes, "application/vnd.android.package-archive", request.Title);
        }
    }
}
