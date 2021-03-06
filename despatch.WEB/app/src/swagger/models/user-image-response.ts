/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ImageResponse } from './image-response';
import { UserResponse } from './user-response';
export interface UserImageResponse extends BaseEntityResponse{
  image?: ImageResponse;
  imageId?: string;
  user?: UserResponse;
  userId?: string;
}
