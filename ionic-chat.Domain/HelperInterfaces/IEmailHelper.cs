using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ionic_chat.Domain.HelperInterfaces
{
    public interface IEmailHelper
    {
        public Task SendEmailAsync(string email, string subject, string message);
        public Task<string> GetTemplateHtmlAsStringAsync<T>(string viewName, T model);
        public string GetEmailConfirmUrl(string code, string email);
    }
}
