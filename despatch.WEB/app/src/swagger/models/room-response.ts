/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ContactResponse } from './contact-response';
import { UserResponse } from './user-response';
import { MessageResponse } from './message-response';
import { RoomPrivacyType } from './room-privacy-type';
import { RoomImageResponse } from './room-image-response';
import { RoomType } from './room-type';
import { UserRoomResponse } from './user-room-response';
export interface RoomResponse extends BaseEntityResponse{
  contacts?: Array<ContactResponse>;
  creator?: UserResponse;
  creatorId?: string;
  description?: string;
  lastMessage?: MessageResponse;
  lastMessageId?: string;
  name?: string;
  privacyType: RoomPrivacyType;
  roomImages?: Array<RoomImageResponse>;
  type: RoomType;
  userRooms?: Array<UserRoomResponse>;
}
