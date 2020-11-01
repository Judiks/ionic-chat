/* tslint:disable */
import { ContactDataRequest } from './contact-data-request';
import { UserRequest } from './user-request';
export interface ContactRequest {
  contactData?: ContactDataRequest;
  contactDataId?: string;
  friend?: UserRequest;
  friendId?: string;
  id?: string;
  user?: UserRequest;
  userId?: string;
}
