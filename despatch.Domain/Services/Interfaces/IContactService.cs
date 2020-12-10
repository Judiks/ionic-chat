using despatch.Domain.Models.Contacts.Request;
using despatch.Domain.Models.Contacts.Response;
using despatch.Domain.Models.Default.Response;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace despatch.Domain.Services.Interfaces
{
    public interface IContactService
    {
        Task<List<ContactResponse>> GetPaginDataByUserId(GetContactDataRequest model);
        Task<List<ContactResponse>> GetAll();
        Task<List<SyncContactResponse>> SyncAllFromNative(List<SyncContactRequest> model);
    }
}
