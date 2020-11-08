/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { UrlRequest } from './url-request';
import { ImageType } from './image-type';
export interface ImageRequest extends BaseEntityRequest{
  description?: string;
  deviceUrl?: UrlRequest;
  deviceUrlId?: string;
  isMain: boolean;
  name?: string;
  sourceUrl?: UrlRequest;
  sourseUrlId?: string;
  type: ImageType;
}
