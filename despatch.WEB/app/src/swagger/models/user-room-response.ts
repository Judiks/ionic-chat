/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ContactResponse } from './contact-response';
import { RoomResponse } from './room-response';
import { UserResponse } from './user-response';
export interface UserRoomResponse extends BaseEntityResponse{
  contact?: ContactResponse;
  missedMessagesCount?: string;
  room?: RoomResponse;
  roomId?: string;
  user?: UserResponse;
  userId?: string;
}
