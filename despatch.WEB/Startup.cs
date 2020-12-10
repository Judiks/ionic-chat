using AutoMapper;
using despatch.Core.Constants;
using despatch.Infrastructure.Extension;
using despatch.Infrastructure.Helpers.Mapper;
using despatch.WEB.Middeleware;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace despatch
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
            services.AddControllers()
                .AddNewtonsoftJson(options =>
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );
            services.AddRazorPages().AddRazorRuntimeCompilation();
            services.AddHttpContextAccessor();

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot";
            });
            ConfigureSwagger(services);
            ConfigureAutomapper(services);
            ConfigureCors(services, Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("AllowAll");
            app.UseRouting();
            app.UseDeveloperExceptionPage();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseStaticFiles();
            app.UseOpenApi();
            app.UseSwaggerUi3();
            app.UseMiddleware<Middleware>();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "wwwroot";

            });
        }

        private static void ConfigureCors(IServiceCollection services, IConfiguration configuration)
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
                options.AddPolicy("AllowAll", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
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

        private static void ConfigureSwagger(IServiceCollection services)
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
