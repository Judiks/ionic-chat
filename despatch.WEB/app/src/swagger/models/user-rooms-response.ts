/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { RoomResponse } from './room-response';
import { UserResponse } from './user-response';
export interface UserRoomsResponse extends BaseEntityResponse{
  missedMessagesCount?: string;
  room?: RoomResponse;
  roomId?: string;
  user?: UserResponse;
  userId?: string;
}
