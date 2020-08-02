using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

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
                    webBuilder.UseKestrel(options =>
                    {
                      options.ListenAnyIP(57124);
                      options.ListenLocalhost(57124);
                    });
                });
    }
}
