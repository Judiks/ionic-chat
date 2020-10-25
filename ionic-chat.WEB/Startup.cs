using AutoMapper;
using ionic_chat.Domain.Constants;
using ionic_chat.Infrastructure.Extension;
using ionic_chat.Infrastructure.Helpers.Mapper;
using ionic_chat.Infrastructure.Options;
using ionic_chat.WEB.Middeleware;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Linq;

namespace ionic_chat
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {



            services.AddDependencies();
            services.AddDbContext(Configuration.GetConnectionString("DefaultConnection"));
            services.AddOptions(Configuration);
            services.AddControllers();
            services.AddRazorPages().AddRazorRuntimeCompilation();


            ConfigureCors(services);
            ConfigureAutomapper(services);
            ConfigureCors(services, Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseDeveloperExceptionPage();

            app.UseRouting();
            app.UseCors("OriginPolicy");
            app.UseOpenApi();
            app.UseSwaggerUi3();
            app.UseAuthorization();
            app.UseAuthentication();
            app.UseMiddleware<Middleware>();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void ConfigureCors(IServiceCollection services, IConfiguration configuration)
        {
            var corsOptions = configuration.GetSection("Cors")
                .GetSection("Origins").GetChildren().ToArray().Select(c => c.Value).ToArray();
            services.AddCors(options =>
            {
                options.AddPolicy("OriginPolicy", builder =>
                {
                    builder.WithOrigins(corsOptions)
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials().WithExposedHeaders(ExceptionConstant.TokenExpiredHeader, ExceptionConstant.InvalidRefresh);
                });
            });
        }

        private static void ConfigureAutomapper(IServiceCollection services)
        {
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AllowNullCollections = true;
                mc.AddProfile(new MapperProfile());
            });
            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);
        }

        private static void ConfigureCors(IServiceCollection services)
        {
            services.AddSwaggerDocument(config =>
            {
                config.PostProcess = document =>
                {
                    document.Info.Version = "1.0.0v";
                    document.Info.Title = "Despatch";
                    document.Info.Description = "ASP.NET Core 5.0 + ionic";
                };
            });
        }
    }
}
