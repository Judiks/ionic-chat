/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { ContactDataAddressesRequest } from './contact-data-addresses-request';
import { ContactDataImagesRequest } from './contact-data-images-request';
import { ContactDataOrganizationsRequest } from './contact-data-organizations-request';
import { ContactDataPhoneNumbersRequest } from './contact-data-phone-numbers-request';
import { ContactDataUrlsRequest } from './contact-data-urls-request';
export interface ContactDataRequest extends BaseEntityRequest{
  addresses?: Array<ContactDataAddressesRequest>;
  birthdayDate?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  images?: Array<ContactDataImagesRequest>;
  lastName?: string;
  middleName?: string;
  nickname?: string;
  note?: string;
  organizations?: Array<ContactDataOrganizationsRequest>;
  phoneNumbers?: Array<ContactDataPhoneNumbersRequest>;
  urls?: Array<ContactDataUrlsRequest>;
}
