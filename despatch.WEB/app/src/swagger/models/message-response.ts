/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { RoomResponse } from './room-response';
import { UserResponse } from './user-response';
export interface MessageResponse extends BaseEntityResponse{
  room?: RoomResponse;
  roomId?: string;
  sendDate: string;
  text?: string;
  user?: UserResponse;
  userId?: string;
}
