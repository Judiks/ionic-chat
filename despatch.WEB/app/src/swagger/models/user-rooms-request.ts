/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { RoomRequest } from './room-request';
import { UserRequest } from './user-request';
export interface UserRoomsRequest extends BaseEntityRequest{
  missedMessagesCount?: string;
  room?: RoomRequest;
  roomId?: string;
  user?: UserRequest;
  userId?: string;
}
