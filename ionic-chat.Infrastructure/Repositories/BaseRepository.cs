using ionic_chat.Domain.Entities;
using ionic_chat.Domain.RepositorieInterfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ionic_chat.Infrastructure.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        public ApplicationDBContext _applicationDBContext;

        protected DbSet<TEntity> _dbSet;

        public BaseRepository(ApplicationDBContext applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
            _dbSet = _applicationDBContext.Set<TEntity>();
        }

        public async Task<TEntity> GetById(string id)
        {
            return await _dbSet.Where(entity => entity.Id == id).FirstOrDefaultAsync();
        }

        public async Task<List<TEntity>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task Add(TEntity entity)
        {
            await _dbSet.AddAsync(entity);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task AddRange(List<TEntity> entities)
        {
            _dbSet.AddRange(entities);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task Update(TEntity entity)
        {
            _dbSet.Update(entity);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task UpdateRange(List<TEntity> entities)
        {
            _dbSet.UpdateRange(entities);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task Delete(TEntity entity)
        {
            _dbSet.Remove(entity);
            await _applicationDBContext.SaveChangesAsync();
        }

        public async Task DeleteRange(List<TEntity> entities)
        {
            _dbSet.RemoveRange(entities);
            await _applicationDBContext.SaveChangesAsync();
            await _applicationDBContext.SaveChangesAsync();
        }
    }
}
