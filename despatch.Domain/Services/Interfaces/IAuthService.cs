﻿using despatch.Domain.Models.Auth.Request;
using despatch.Domain.Models.Auth.Response;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Default.Response;
using System.Threading.Tasks;

namespace despatch.Domain.Services.Interfaces
{
    public interface IAuthService
    {
        Task<bool> CheckUserName(string userName);
        Task<bool> CheckEmail(string email);
        Task<string> SendConfirmSMS(SendConfirmSMSRequest model);
        Task<RegisterResponse> Register(RegisterRequest model);
        Task<LoginResponse> Login(LoginRequest model);
        Task Logout();
        Task<RefreshTokenResponse> RefreshToken(RefreshTokenRequest model);
    }
}
