/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ImageResponse } from './image-response';
import { RoomResponse } from './room-response';
export interface RoomImageResponse extends BaseEntityResponse{
  image?: ImageResponse;
  imageId?: string;
  room?: RoomResponse;
  roomId?: string;
}
