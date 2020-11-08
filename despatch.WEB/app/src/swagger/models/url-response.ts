/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { UrlType } from './url-type';
export interface UrlResponse extends BaseEntityResponse{
  path?: string;
  type: UrlType;
}
