using System.Threading.Tasks;

namespace despatch.Domain.HelperInterfaces
{
    public interface IAuthMessageHelper
    {
        Task SendSmsAsync(string number, string message);
    }
}
