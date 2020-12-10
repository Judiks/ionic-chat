﻿using despatch.Domain.HelperInterfaces;
using despatch.Domain.Repositories;
using despatch.Domain.Services;
using despatch.Domain.Services.Interfaces;
using despatch.Infrastructure.Helpers;
using despatch.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace despatch.Infrastructure.Extension
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
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IPhoneNumberRepository, PhoneNumberRepository>();

            // Services
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IRoomService, RoomService>();
            services.AddScoped<IContactService, ContactService>();
            services.AddScoped<IFileService, FileService>();

            // Helpers
            services.AddScoped<IJwtHelper, JwtHelper>();
            services.AddScoped<IAuthMessageHelper, AuthMessageHelper>();
            services.AddScoped<IEmailHelper, EmailHelper>();
            services.AddScoped<IAuthHelper, AuthHelper>();

        }
    }
}
