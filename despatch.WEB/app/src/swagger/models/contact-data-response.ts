/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ContactDataAddressesResponse } from './contact-data-addresses-response';
import { ContactDataImageResponse } from './contact-data-image-response';
import { ContactDataOrganizationResponse } from './contact-data-organization-response';
import { ContactDataPhoneNumberResponse } from './contact-data-phone-number-response';
import { ContactDataUrlsResponse } from './contact-data-urls-response';
export interface ContactDataResponse extends BaseEntityResponse{
  addresses?: Array<ContactDataAddressesResponse>;
  birthdayDate?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  images?: Array<ContactDataImageResponse>;
  lastName?: string;
  middleName?: string;
  nickname?: string;
  note?: string;
  organizations?: Array<ContactDataOrganizationResponse>;
  phoneNumbers?: Array<ContactDataPhoneNumberResponse>;
  urls?: Array<ContactDataUrlsResponse>;
}
