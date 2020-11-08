/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ContactDataAddressesResponse } from './contact-data-addresses-response';
import { ContactDataImagesResponse } from './contact-data-images-response';
import { ContactDataOrganizationsResponse } from './contact-data-organizations-response';
import { ContactDataPhoneNumbersResponse } from './contact-data-phone-numbers-response';
import { ContactDataUrlsResponse } from './contact-data-urls-response';
export interface ContactDataResponse extends BaseEntityResponse{
  addresses?: Array<ContactDataAddressesResponse>;
  birthdayDate?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  images?: Array<ContactDataImagesResponse>;
  lastName?: string;
  middleName?: string;
  nickname?: string;
  note?: string;
  organizations?: Array<ContactDataOrganizationsResponse>;
  phoneNumbers?: Array<ContactDataPhoneNumbersResponse>;
  urls?: Array<ContactDataUrlsResponse>;
}
