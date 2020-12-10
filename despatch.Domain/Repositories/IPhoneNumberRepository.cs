using despatch.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.Repositories
{
    public interface IPhoneNumberRepository : IBaseRepository<PhoneNumber>
    {
        Task<PhoneNumber> GetByNumber(string number);
        Task<List<PhoneNumber>> GetByListNumber(List<string> numbers);
    }
}
