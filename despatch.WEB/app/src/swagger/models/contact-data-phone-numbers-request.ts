/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { ContactDataRequest } from './contact-data-request';
import { PhoneNumberRequest } from './phone-number-request';
export interface ContactDataPhoneNumbersRequest extends BaseEntityRequest{
  contactData?: ContactDataRequest;
  contactDataId?: string;
  phoneNumber?: PhoneNumberRequest;
  phoneNumberId?: string;
}
