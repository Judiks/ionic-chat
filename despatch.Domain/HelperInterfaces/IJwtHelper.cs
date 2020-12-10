using despatch.Domain.Entities;

namespace despatch.Domain.HelperInterfaces
{
    public interface IJwtHelper
    {
        string CreateToken(User user, string role, int expireDays);
    }
}
