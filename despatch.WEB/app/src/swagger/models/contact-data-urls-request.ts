/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { ContactDataRequest } from './contact-data-request';
import { UrlRequest } from './url-request';
export interface ContactDataUrlsRequest extends BaseEntityRequest{
  contactData?: ContactDataRequest;
  contactDataId?: string;
  url?: UrlRequest;
  urlId?: string;
}
