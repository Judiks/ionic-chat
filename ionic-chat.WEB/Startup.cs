using AutoMapper;
using ionic_chat.Domain.Constants;
using ionic_chat.Infrastructure.Extension;
using ionic_chat.Infrastructure.Helpers.Mapper;
using ionic_chat.Infrastructure.Options;
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
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext(connectionString);
            services.AddDependencies();
            ConfigureAutomapper(services);
            var smsOptons = Configuration.GetSection("SMSOptions");
            services.Configure<SMSoptions>(smsOptons);
            var securityKey = Configuration.GetSection("AuthOption:JwtKey").Value;
            services.AddAuthOptions(Configuration, securityKey);
            ConfigureCors(services, Configuration);
            services.AddControllers();
            services.AddSwaggerDocument(config =>
            {
                config.PostProcess = document =>
                {
                    document.Info.Version = "1.0.0v";
                    document.Info.Title = "Dispatch";
                    document.Info.Description = "ASP.NET Core 5.0 + ionic";
                };
            });
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
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void ConfigureCors(IServiceCollection services, IConfiguration configuration)
        {
            string[] corsOptions = configuration.GetSection("Cors")
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
    }
}
