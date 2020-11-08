using System;
using System.Collections.Generic;
using System.Text;

namespace despatch.Domain.Models.Default.Response
{
    public class ContactDataImagesResponse : BaseEntityResponse
    {
        public string ContactDataId { get; set; }
        public string ImageId { get; set; }

        public virtual ContactDataResponse ContactData { get; set; }
        public virtual ImageResponse Image { get; set; }
    }
}
