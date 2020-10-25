/* tslint:disable */
import { UserRequest } from './user-request';
export interface RoomRequest {
  creator?: UserRequest;
  creatorId?: string;
  description?: string;
  img?: ArrayBuffer;
  name?: string;
}
