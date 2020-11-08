/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { UrlType } from './url-type';
export interface UrlRequest extends BaseEntityRequest{
  path?: string;
  type: UrlType;
}
