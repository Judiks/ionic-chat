/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { UserResponse } from './user-response';
import { ImageResponse } from './image-response';
import { MessageResponse } from './message-response';
import { RoomPrivacyType } from './room-privacy-type';
import { RoomType } from './room-type';
import { UserRoomsResponse } from './user-rooms-response';
export interface RoomResponse extends BaseEntityResponse{
  creator?: UserResponse;
  creatorId?: string;
  description?: string;
  images?: Array<ImageResponse>;
  lastMessage?: MessageResponse;
  lastMessageId?: string;
  name?: string;
  privacyType: RoomPrivacyType;
  type: RoomType;
  userRooms?: Array<UserRoomsResponse>;
}
