
using despatch.Domain.Entities;
using despatch.Domain.Models.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace despatch.Infrastructure.Extension
{
    public static class DBContextExtension
    {
        public static void AddDbContext(this IServiceCollection services, string connectionString)
        {
            var assemblyName = Assembly.GetAssembly(typeof(ApplicationDBContext)).GetName().Name;
            services.AddDbContext<ApplicationDBContext>(options =>
            {
                options.UseSqlServer(connectionString, b => { b.MigrationsAssembly(assemblyName); b.EnableRetryOnFailure();  });
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
            InitData(services);
        }

        public static void InitData(IServiceCollection services)
        {
            ApplicationDBContext context = services.BuildServiceProvider()
                       .GetService<ApplicationDBContext>();
            InitRoles(context);
        }

        public static void InitRoles(ApplicationDBContext context)
        {
            var roles = Enum.GetNames(typeof(RoleModel));
            var dbRoles = context.Roles.ToList();
            roles = roles.Where(r => !dbRoles.Any(r2 => r2.Name.Equals(r))).ToArray();

            var data = new List<IdentityRole>();
            foreach (var role in roles)
            {
                var roleData = new IdentityRole
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = role,
                    NormalizedName = role.ToUpper().Replace(" ", "_")
                };
                data.Add(roleData);
            }
            context.Roles.AddRange(data);
            context.SaveChanges();
        }
    }
}
