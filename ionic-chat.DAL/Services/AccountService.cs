using AutoMapper;
using ionic_chat.Domain.Constants;
using ionic_chat.Domain.Entities;
using ionic_chat.Domain.Exeptions;
using ionic_chat.Domain.Exсeptions;
using ionic_chat.Domain.HelperInterfaces;
using ionic_chat.Domain.Models.Account.Request;
using ionic_chat.Domain.Models.Default.Request;
using ionic_chat.Domain.Models.Default.Response;
using ionic_chat.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ionic_chat.Domain.Services
{
    public class AccountService : IAccountService
    {
        private readonly IMapper _mapper;
        private readonly IJwtHelper _jwtHelper;
        private readonly IAuthMessageHelper _authMessageHelper;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        public AccountService(UserManager<User> userManager, 
            IMapper mapper, SignInManager<User> signInManager, IJwtHelper jwtHelper, 
            IAuthMessageHelper authMessageHelper)
        {
            _signInManager = signInManager ?? throw new ArgumentNullException(nameof(signInManager));
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
            _authMessageHelper = authMessageHelper;
            _jwtHelper = jwtHelper;
            _mapper = mapper;
        }

        private async Task<User> FindUser(string login)
        {
            User userByEmail = await _userManager.FindByEmailAsync(login);
            if (userByEmail != null)
            {
                return userByEmail;
            }
            User userByUserName = await _userManager.FindByNameAsync(login);
            if (userByUserName != null)
            {
                return userByUserName;
            }
            User userByPhone = await _userManager.Users.FirstOrDefaultAsync(user => user.PhoneNumber == login);
            if (userByPhone != null)
            {
                return userByUserName;
            }
            return null;
        }

        public async Task<string> Login(LoginRequest model)
        {
            var user = await FindUser(model.Login);
            var role = (await _userManager.GetRolesAsync(user)).FirstOrDefault();
            if (user is null)
            {
                throw new AppExсeption(ExceptionConstant.WrongEmailOrPassword);
            }
            var result = await _signInManager.PasswordSignInAsync(user, model.Password, model.IsRememberMe, false);
            if (!result.Succeeded)
            {
                throw new AppExсeption(ExceptionConstant.WrongEmailOrPassword);
            }
            var response = _jwtHelper.CreateToken(user, role);
            return response;

        }
        private async Task IsUserExist(UserRequest model)
        {
            var isEmailExist = await _userManager.FindByEmailAsync(model.Email);
            var isPhoneExist = await _userManager.Users.AnyAsync(user => user.PhoneNumber == model.PhoneNumber);
            var isNameExist = await _userManager.Users.AnyAsync(user => user.UserName == model.UserName);
            if (isEmailExist != null)
            {
                throw new ApplicationException("Email already exists");
            }

            if (isPhoneExist)
            {
                throw new ApplicationException("Phone already exists");
            }

            if (isNameExist)
            {
                throw new ApplicationException("Username already exists");
            }
        }
        public async Task<UserResponse> CreateUser(UserRequest model)
        {
            await IsUserExist(model);
            var user = _mapper.Map<UserRequest, User>(model);
            var status = await _userManager.CreateAsync(user);
            if (!status.Succeeded)
            {
                throw new AppExсeption(StatusCodes.Status400BadRequest, status.Errors.FirstOrDefault().ToString());
            }
            await _userManager.AddToRoleAsync(user, model.Role.ToString());
            var result = _mapper.Map<User, UserResponse>(user);
            result.Role = model.Role;
            return result;
        }

        public async Task<string> SendConfirmSMS(SendConfirmSMSRequest model)
        {
            var random = new Random();
            var code = random.Next(100000, 999999).ToString();
            await _authMessageHelper.SendSmsAsync(model.PhoneNumber, code);
            return code;
        }
    }
}
