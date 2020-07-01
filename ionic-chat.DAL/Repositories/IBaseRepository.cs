using System.Collections.Generic;
using System.Threading.Tasks;

namespace ionic_chat.DAL.Repositories
{
    public interface IBaseRepository<TEntity>
    {
        Task<TEntity> GetById(string id);
        Task<List<TEntity>> GetAll();
        Task Add(TEntity entity);
        Task AddRange(List<TEntity> entities);
        Task Update(TEntity entity);
        Task UpdateRange(List<TEntity> entities);
        Task Delete(TEntity entity);
        Task DeleteRange(List<TEntity> entities);
    }
}
