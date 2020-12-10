/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ContactDataResponse } from './contact-data-response';
import { PhoneNumberResponse } from './phone-number-response';
export interface ContactDataPhoneNumberResponse extends BaseEntityResponse{
  contactData?: ContactDataResponse;
  contactDataId?: string;
  phoneNumber?: PhoneNumberResponse;
  phoneNumberId?: string;
}
