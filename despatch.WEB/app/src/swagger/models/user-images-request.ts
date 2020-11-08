/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { ImageRequest } from './image-request';
import { UserRequest } from './user-request';
export interface UserImagesRequest extends BaseEntityRequest{
  image?: ImageRequest;
  imageId?: string;
  user?: UserRequest;
  userId?: string;
}
