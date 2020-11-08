/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ContactDataResponse } from './contact-data-response';
import { UserResponse } from './user-response';
export interface ContactResponse extends BaseEntityResponse{
  contactData?: ContactDataResponse;
  contactDataId?: string;
  friend?: UserResponse;
  friendId?: string;
  user?: UserResponse;
  userId?: string;
}
