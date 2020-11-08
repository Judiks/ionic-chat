/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { PhoneNumberResponse } from './phone-number-response';
import { UserResponse } from './user-response';
export interface UserPhoneNumbersResponse extends BaseEntityResponse{
  phoneNumber?: PhoneNumberResponse;
  phoneNumberId?: string;
  user?: UserResponse;
  userId?: string;
}
