/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { UrlResponse } from './url-response';
import { UserResponse } from './user-response';
export interface UserUrlsResponse extends BaseEntityResponse{
  url?: UrlResponse;
  urlId?: string;
  user?: UserResponse;
  userId?: string;
}
