using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Request
{
    public class CountryRequest : BaseEntityRequest
    {
        public string Name { get; set; }
    }
}
