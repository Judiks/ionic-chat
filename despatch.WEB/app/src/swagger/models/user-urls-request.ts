/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { UrlRequest } from './url-request';
import { UserRequest } from './user-request';
export interface UserUrlsRequest extends BaseEntityRequest{
  url?: UrlRequest;
  urlId?: string;
  user?: UserRequest;
  userId?: string;
}
