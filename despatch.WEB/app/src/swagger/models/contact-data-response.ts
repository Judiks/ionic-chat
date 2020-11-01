/* tslint:disable */
import { UserResponse } from './user-response';
export interface ContactDataResponse {
  contactId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  user?: UserResponse;
}
