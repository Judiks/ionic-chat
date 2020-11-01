using despatch.Domain.Entities;
using despatch.Domain.Models.Contacts.Request;
using despatch.Domain.Models.Default.Response;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.RepositorieInterfaces
{
    public interface IContactRepository : IBaseRepository<Contact>
    {
        Task<List<Contact>> GetContactData(GetContactDataRequest model);
    }
}
