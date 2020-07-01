using ionic_chat.DAL.Repositories;
using ionic_chat.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        }
    }
}
