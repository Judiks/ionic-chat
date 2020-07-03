using ionic_chat.DAL.Constants;
using ionic_chat.DAL.Exeptions;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ionic_chat.WEB.Middeleware
{
    public class Middleware
    {
        private readonly RequestDelegate _next;
        public Middleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (AppExeption exception)
            {
                context.Response.StatusCode = StatusCodes.Status500InternalServerError;
                if (exception.StatusCode.HasValue)
                {
                    context.Response.StatusCode = exception.StatusCode.Value;
                }
                context.Response.ContentType = @"application/json";
                await context.Response.WriteAsync(exception.Message);
            }
            catch (UnauthorizeException exception)
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                context.Response.Headers.Add(ExceptionConstant.InvalidRefresh, "true");
                context.Response.ContentType = @"application/json";
                await context.Response.WriteAsync(exception.Message);
            }
            catch (Exception exception)
            {
                context.Response.StatusCode = StatusCodes.Status400BadRequest;
                context.Response.ContentType = @"application/json";
                await context.Response.WriteAsync("InnerExeption : " + exception.InnerException);
            }
        }
    }
}
