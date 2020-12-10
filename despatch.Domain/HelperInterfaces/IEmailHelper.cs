using System.Threading.Tasks;

namespace despatch.Domain.HelperInterfaces
{
    public interface IEmailHelper
    {
        public Task SendEmailAsync(string email, string subject, string message);
        public Task<string> GetTemplateHtmlAsStringAsync<T>(string viewName, T model);
        public string GetEmailConfirmUrl(string code, string email);
    }
}
