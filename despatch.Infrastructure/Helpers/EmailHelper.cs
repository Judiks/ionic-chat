using despatch.Domain.HelperInterfaces;
using despatch.Infrastructure.Options;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.IO;
using System.Threading.Tasks;

namespace despatch.Infrastructure.Helpers
{
    public class EmailHelper : IEmailHelper
    {
        private readonly IRazorViewEngine _razorViewEngine;
        private readonly IServiceProvider _serviceProvider;
        private readonly ITempDataProvider _tempDataProvider;
        private readonly IOptions<EmailOptions> _option;
        public EmailHelper(
         IRazorViewEngine razorViewEngine,
         IServiceProvider serviceProvider,
         ITempDataProvider tempDataProvider,
         IOptions<EmailOptions> option)
        {
            _razorViewEngine = razorViewEngine;
            _serviceProvider = serviceProvider;
            _tempDataProvider = tempDataProvider;
            _option = option;
        }
        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Despatch", _option.Value.Email));
            emailMessage.To.Add(new MailboxAddress(email, email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };

            using var client = new SmtpClient();
            await client.ConnectAsync("smtp.gmail.com", 465, true);
            await client.AuthenticateAsync(_option.Value.Email, _option.Value.Password);
            await client.SendAsync(emailMessage);
            await client.DisconnectAsync(true);
        }

        public async Task<string> GetTemplateHtmlAsStringAsync<T>(string viewName, T model)
        {
            var httpContext = new DefaultHttpContext() { RequestServices = _serviceProvider };
            var actionContext = new ActionContext(httpContext, new RouteData(), new ActionDescriptor());

            using var sw = new StringWriter();
            Microsoft.AspNetCore.Mvc.ViewEngines.ViewEngineResult viewResult = _razorViewEngine.FindView(actionContext, viewName, false);

            if (viewResult.View == null)
            {
                return string.Empty;
            }

            var viewDataDictionary = new ViewDataDictionary(
                new EmptyModelMetadataProvider(),
                new ModelStateDictionary()
            )
            {
                Model = model
            };

            var viewContext = new ViewContext(
                actionContext,
                viewResult.View,
                viewDataDictionary,
                new TempDataDictionary(actionContext.HttpContext, _tempDataProvider),
                sw,
                new HtmlHelperOptions()
            );

            await viewResult.View.RenderAsync(viewContext);

            return sw.ToString();
        }

        public string GetEmailConfirmUrl(string code, string email)
        {
            var domain = _option.Value.Domain;
            var callbackUrl = $"{domain}/account/confirm?code={code}&email={email}";
            return callbackUrl;
        }
    }
}
