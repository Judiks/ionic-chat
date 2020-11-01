/* tslint:disable */
import { ContactDataResponse } from './contact-data-response';
import { UserResponse } from './user-response';
export interface ContactResponse {
  contactData?: ContactDataResponse;
  contactDataId?: string;
  friend?: UserResponse;
  friendId?: string;
  user?: UserResponse;
  userId?: string;
}
