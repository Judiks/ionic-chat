using ionic_chat.Domain.HelperInterfaces;
using ionic_chat.Domain.RepositorieInterfaces;
using ionic_chat.Domain.Services;
using ionic_chat.Domain.Services.Interfaces;
using ionic_chat.Infrastructure.Helpers;
using ionic_chat.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace ionic_chat.Infrastructure.Extension
{
    public static class DependencyExtention
    {
        public static void AddDependencies(this IServiceCollection services)
        {
            // Repositories
            services.AddScoped<IContactRepository, ContactRepository>();
            services.AddScoped<IMessageRepository, MessageRepository>();
            services.AddScoped<IRoomRepository, RoomRepository>();
            services.AddScoped<IUserRoomRepository, UserRoomRepository>();

            // Services
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IRoomService, RoomService>();

            // Helpers
            services.AddScoped<IJwtHelper, JwtHelper>();
            services.AddScoped<IAuthMessageHelper, AuthMessageHelper>();
            services.AddScoped<IEmailHelper, EmailHelper>();
        }
    }
}
