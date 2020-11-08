/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { ContactDataRequest } from './contact-data-request';
import { ImageRequest } from './image-request';
export interface ContactDataImagesRequest extends BaseEntityRequest{
  contactData?: ContactDataRequest;
  contactDataId?: string;
  image?: ImageRequest;
  imageId?: string;
}
