/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { UrlResponse } from './url-response';
import { ImageType } from './image-type';
export interface ImageResponse extends BaseEntityResponse{
  description?: string;
  deviceUrl?: UrlResponse;
  deviceUrlId?: string;
  isMain: boolean;
  name?: string;
  sourceUrl?: UrlResponse;
  sourseUrlId?: string;
  type: ImageType;
}
