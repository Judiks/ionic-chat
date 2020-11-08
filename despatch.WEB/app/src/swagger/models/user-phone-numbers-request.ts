/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { PhoneNumberRequest } from './phone-number-request';
import { UserRequest } from './user-request';
export interface UserPhoneNumbersRequest extends BaseEntityRequest{
  phoneNumber?: PhoneNumberRequest;
  phoneNumberId?: string;
  user?: UserRequest;
  userId?: string;
}
