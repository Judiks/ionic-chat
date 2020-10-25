using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Net;
using System.Security.Cryptography.X509Certificates;

namespace ionic_chat
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                    //webBuilder.UseKestrel(options =>
                    //{
                    //    options.ListenAnyIP(44363);
                    //    // nead certificate 
                    //    //var cert = new X509Certificate2("rootSSL.pem", "Ss552000");
                    //    //options.Listen(IPAddress.IPv6Any, 44363, listenOptions =>
                    //    //{
                    //    //    listenOptions.UseHttps(listenOptions => listenOptions.ServerCertificate = cert);
                    //    //});
                    //});
                    webBuilder.UseIISIntegration();
                });
    }
}
