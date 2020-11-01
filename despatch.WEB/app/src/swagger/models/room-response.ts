/* tslint:disable */
import { UserResponse } from './user-response';
export interface RoomResponse {
  creator?: UserResponse;
  creatorId?: string;
  description?: string;
  img?: ArrayBuffer;
  name?: string;
}
