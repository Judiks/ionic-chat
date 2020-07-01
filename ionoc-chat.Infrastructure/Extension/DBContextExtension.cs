
using ionic_chat.DAL.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace ionoc_chat.Infrastructure.Extension
{
    public static class DBContextExtension
    {
        public static void AddDbContext(this IServiceCollection services, string connectionString)
        {
            var assemblyName = Assembly.GetAssembly(typeof(ApplicationDBContext)).GetName().Name;
            services.AddDbContext<ApplicationDBContext>(options =>
            {
                options.UseSqlServer(connectionString, b => b.MigrationsAssembly(assemblyName));
            }, ServiceLifetime.Scoped);

            services.AddIdentity<User, IdentityRole>(
                options =>
                {
                    options.Password.RequireDigit = false;
                    options.Password.RequiredLength = 8;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequireLowercase = false;
                })
                .AddEntityFrameworkStores<ApplicationDBContext>()
                .AddDefaultTokenProviders();
        }
    }
}
