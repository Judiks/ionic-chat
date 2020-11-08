/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { UserRequest } from './user-request';
import { ImageRequest } from './image-request';
import { MessageRequest } from './message-request';
import { RoomPrivacyType } from './room-privacy-type';
import { RoomType } from './room-type';
import { UserRoomsRequest } from './user-rooms-request';
export interface RoomRequest extends BaseEntityRequest{
  creator?: UserRequest;
  creatorId?: string;
  description?: string;
  images?: Array<ImageRequest>;
  lastMessage?: MessageRequest;
  lastMessageId?: string;
  name?: string;
  privacyType: RoomPrivacyType;
  type: RoomType;
  userRooms?: Array<UserRoomsRequest>;
}
