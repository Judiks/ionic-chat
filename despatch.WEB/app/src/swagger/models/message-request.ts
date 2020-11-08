/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { RoomRequest } from './room-request';
import { UserRequest } from './user-request';
export interface MessageRequest extends BaseEntityRequest{
  room?: RoomRequest;
  roomId?: string;
  sendDate: string;
  text?: string;
  user?: UserRequest;
  userId?: string;
}
