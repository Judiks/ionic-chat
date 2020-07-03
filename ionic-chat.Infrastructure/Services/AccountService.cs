using ionic_chat.DAL.Entities;
using ionic_chat.Infrastructure.Models.Account.Request;
using ionic_chat.Infrastructure.Models.Account.Response;
using ionic_chat.Infrastructure.Models.Default.Request;
using ionic_chat.Infrastructure.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ionic_chat.Infrastructure.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public AccountService()
        {

        }

        public Task Login(LoginRequest model)
        {

        }

        public async Task<RegisterResponse> Register(UserRequest model)
        {
            var isEmailExist = _userManager.FindByEmailAsync(model.Email);
            var isPhoneExist = await _userManager.Users.AnyAsync(user => user.PhoneNumber == model.PhoneNumber);

            if (isEmailExist)
            {
                throw new 
            }
        }
    }
}
