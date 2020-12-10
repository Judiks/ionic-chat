using AutoMapper;
using despatch.Core.Constants;
using despatch.Core.Extensions;
using despatch.Core.Exсeptions;
using despatch.Domain.Entities;
using despatch.Domain.HelperInterfaces;
using despatch.Domain.Models.Auth.Request;
using despatch.Domain.Models.Auth.Response;
using despatch.Domain.Models.Default.Request;
using despatch.Domain.Models.Enums;
using despatch.Domain.Models.RazorModels;
using despatch.Domain.Repositories;
using despatch.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace despatch.Domain.Services
{
    public class AuthService : IAuthService
    {
        private readonly IMapper _mapper;
        private readonly IJwtHelper _jwtHelper;
        private readonly IAuthHelper _authHelper;
        private readonly IEmailHelper _emailHelper;
        private readonly IContactRepository _contactRepository;
        private readonly IUserRepository _userRepository;
        private readonly IAuthMessageHelper _authMessageHelper;
        private readonly IPhoneNumberRepository _phoneNumberRepository;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        public AuthService(UserManager<User> userManager, IContactRepository contactRepository,
            IMapper mapper, SignInManager<User> signInManager, IJwtHelper jwtHelper, IUserRepository userRepository,
            IAuthMessageHelper authMessageHelper, IEmailHelper emailHelper, IAuthHelper authHelper, IPhoneNumberRepository phoneNumberRepository)
        {
            _signInManager = signInManager ?? throw new ArgumentNullException(nameof(signInManager));
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
            _authMessageHelper = authMessageHelper;
            _emailHelper = emailHelper;
            _authHelper = authHelper;
            _jwtHelper = jwtHelper;
            _mapper = mapper;
            _contactRepository = contactRepository;
            _userRepository = userRepository;
            _phoneNumberRepository = phoneNumberRepository;
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

        public async Task<LoginResponse> Login(LoginRequest model)
        {
            User user = await FindUser(model.Login);
            var role = (await _userManager.GetRolesAsync(user)).FirstOrDefault();
            if (user is null)
            {
                throw new AppExсeption(ExceptionConstant.WrongEmailOrPassword);
            }
            SignInResult result = await _signInManager.PasswordSignInAsync(user, model.Password, true, false);
            if (!result.Succeeded)
            {
                throw new AppExсeption(ExceptionConstant.WrongEmailOrPassword);
            }
            var authToken = _jwtHelper.CreateToken(user, role, 1);
            var refreshToken = _jwtHelper.CreateToken(user, role, 2);
            LoginResponse response = _mapper.Map<User, LoginResponse>(user);
            response.AuthToken = authToken;
            response.RefreshToken = refreshToken;
            response.Role = Enum.Parse<Role>(role);
            return response;

        }
        private async Task IsUserExist(UserRequest model)
        {
            User isEmailExist = await _userManager.FindByEmailAsync(model.Email);
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

        public async Task<RegisterResponse> Register(RegisterRequest model)
        {
            await IsUserExist(model);
            User user = _mapper.Map<UserRequest, User>(model);
            user.PhoneNumber = user.PhoneNumber.PhoneNumberFormat();
            user.PhoneNumberConfirmed = true;
            IdentityResult status = await _userManager.CreateAsync(user, model.Password);
            if (!status.Succeeded)
            {
                throw new AppExсeption(StatusCodes.Status400BadRequest, status.Errors.FirstOrDefault().ToString());
            }
            await _userManager.AddToRoleAsync(user, model.Role.ToString());
            RegisterResponse result = _mapper.Map<User, RegisterResponse>(user);
            result.Role = model.Role;
            PhoneNumber phoneNumber = await _phoneNumberRepository.GetByNumber(user.PhoneNumber);
            if (!(phoneNumber is null))
            {
                List<Contact> contacts = await _contactRepository.GetByPhone(phoneNumber.Id, user.PhoneNumber);
                foreach(var contact in contacts)
                {
                    contact.FriendId = user.Id;
                }
                await _contactRepository.UpdateRange(contacts);

            }
            var confirmEmail = new ConfirmEmailView();
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            confirmEmail.CallbackUrl = _emailHelper.GetEmailConfirmUrl(code, user.Email);
            confirmEmail.UserName = model.UserName;
            var template = await _emailHelper.GetTemplateHtmlAsStringAsync("ConfirmEmailView", confirmEmail);
            await _emailHelper.SendEmailAsync(model.Email, "Confirm Email", template);
            return result;
        }

        public async Task<string> SendConfirmSMS(SendConfirmSMSRequest model)
        {
            var random = new Random();
            var code = random.Next(100000, 999999).ToString();
            var number = model.PhoneNumber.Replace(" ", "");
            User user = await _userManager.Users.FirstOrDefaultAsync(user => user.PhoneNumber == number);
            if (!(user is null))
            {
                throw new AppExсeption(StatusCodes.Status400BadRequest, ExceptionConstant.UserAlreadyExist);
            }
            await _authMessageHelper.SendSmsAsync(number, $"Your Despatch verification code: { code } \n\n Thank you for choosing us. Best regards, Despatch team. \n\n { model.Hash }");


            return code;
        }

        public async Task Logout()
        {
            await _signInManager.SignOutAsync();
        }

        public async Task<RefreshTokenResponse> RefreshToken(RefreshTokenRequest model)
        {
            var userId = _authHelper.GetUserId();
            User user = await _userManager.FindByIdAsync(userId);
            var role = (await _userManager.GetRolesAsync(user)).FirstOrDefault();
            var authToken = _jwtHelper.CreateToken(user, role, 1);
            var refreshToken = _jwtHelper.CreateToken(user, role, 2);

            RefreshTokenResponse response = _mapper.Map<User, RefreshTokenResponse>(user);
            response.RefreshToken = refreshToken;
            response.AuthToken = authToken;
            response.Role = (Role)Enum.Parse(typeof(Role), role);
            return response;
        }

        public async Task<bool> CheckUserName(string userName)
        {
            User user = await _userManager.FindByNameAsync(userName);
            if (user == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<bool> CheckEmail(string email)
        {
            User user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task SendInvitationSMS(SendInvitationSmsRequest request)
        {
            var random = new Random();
            Contact contact = await _contactRepository.GetByIdWithNested(request.ContactId);
            string userId = _authHelper.GetUserId();
            User user = await _userRepository.GetById(userId);
            string message = $"You have been invited to Despatch messenger by { user.UserName }! \n Refer to the link to view the application opportunities!";
            message += $"\n http://localhost:8100/chat/rooms/room \n With ♥ { user.UserName }";
            foreach (var phoneNumber in contact.ContactData.PhoneNumbers)
            {
                var number = phoneNumber.PhoneNumber.Number.Replace(" ", "");
                await _authMessageHelper.SendSmsAsync(number, message);
            }
        }
    }
}
