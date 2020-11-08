/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ContactDataResponse } from './contact-data-response';
import { UrlResponse } from './url-response';
export interface ContactDataUrlsResponse extends BaseEntityResponse{
  contactData?: ContactDataResponse;
  contactDataId?: string;
  url?: UrlResponse;
  urlId?: string;
}
