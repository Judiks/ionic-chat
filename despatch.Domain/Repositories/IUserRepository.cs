using despatch.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetById(string id);
        Task<List<User>> GetAll();
        Task Add(User entity);
        Task AddRange(List<User> entities);
        Task Update(User entity);
        Task UpdateRange(List<User> entities);
        Task Delete(User entity);
        Task DeleteRange(List<User> entities);
    }
}
