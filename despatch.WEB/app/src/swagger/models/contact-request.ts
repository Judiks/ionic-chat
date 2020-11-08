/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { ContactDataRequest } from './contact-data-request';
import { UserRequest } from './user-request';
export interface ContactRequest extends BaseEntityRequest{
  contactData?: ContactDataRequest;
  contactDataId?: string;
  friend?: UserRequest;
  friendId?: string;
  user?: UserRequest;
  userId?: string;
}
