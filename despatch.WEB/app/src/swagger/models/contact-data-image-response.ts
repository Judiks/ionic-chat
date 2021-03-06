/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ContactDataResponse } from './contact-data-response';
import { ImageResponse } from './image-response';
export interface ContactDataImageResponse extends BaseEntityResponse{
  contactData?: ContactDataResponse;
  contactDataId?: string;
  image?: ImageResponse;
  imageId?: string;
}
