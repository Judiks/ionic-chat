using despatch.Domain.Entities;
using despatch.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace despatch.Infrastructure.Repositories
{
    public class PhoneNumberRepository : BaseRepository<PhoneNumber>, IPhoneNumberRepository
    {
        public PhoneNumberRepository(ApplicationDBContext context) : base(context)
        {

        }

        public async Task<List<PhoneNumber>> GetByListNumber(List<string> numbers)
        {
            return await _dbSet.Where(x => numbers.Contains(x.Number)).ToListAsync();
        }

        public async Task<PhoneNumber> GetByNumber(string number)
        {
            return await _dbSet.FirstOrDefaultAsync(x => x.Number.Equals(number));
        }
    }
}
