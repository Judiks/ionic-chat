using ionic_chat.DAL.Repositories;
using ionic_chat.Infrastructure.Repositories;
using ionic_chat.Infrastructure.Services;
using ionic_chat.Infrastructure.Services.Interfaces;
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
        }
    }
}
