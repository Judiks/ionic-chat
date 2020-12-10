using despatch.Domain.Entities;
using despatch.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace despatch.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        public ApplicationDBContext _applicationDBContext;

        protected DbSet<User> _dbSet;

        public UserRepository(ApplicationDBContext applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
            _dbSet = _applicationDBContext.Set<User>();
        }
        public async Task<User> GetById(string id)
        {
            return await _dbSet.Where(entity => entity.Id == id).FirstOrDefaultAsync();
        }

        public async Task<List<User>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task Add(User entity)
        {
            await _dbSet.AddAsync(entity);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task AddRange(List<User> entities)
        {
            _dbSet.AddRange(entities);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task Update(User entity)
        {
            _dbSet.Update(entity);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task UpdateRange(List<User> entities)
        {
            _dbSet.UpdateRange(entities);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task Delete(User entity)
        {
            _dbSet.Remove(entity);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task DeleteRange(List<User> entities)
        {
            _dbSet.RemoveRange(entities);
            await _applicationDBContext.SaveChangesAsync();
        }
    }
}
