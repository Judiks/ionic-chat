using despatch.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.Repositories
{
    public interface IContactRepository : IBaseRepository<Contact>
    {
        Task<List<Contact>> GetPaginDataByUserId(string userId, int skip);
        Task<List<Contact>> GetByPhone(string numberId, string userPhoneNumber);
        Task<List<Contact>> GetByListPhone(List<string> numbersId, string userPhoneNumber);
        Task<Contact> GetByIdWithNested(string userId);
    }
}
