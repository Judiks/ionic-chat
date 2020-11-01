/* tslint:disable */
import { UserRequest } from './user-request';
import { RoomPrivacyTypeModel } from './room-privacy-type-model';
import { RoomTypeModel } from './room-type-model';
export interface RoomRequest {
  creator?: UserRequest;
  creatorId?: string;
  description?: string;
  id?: string;
  img?: ArrayBuffer;
  name?: string;
  privacyType: RoomPrivacyTypeModel;
  type: RoomTypeModel;
}
