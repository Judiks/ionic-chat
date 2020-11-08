/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { AddressResponse } from './address-response';
import { ContactDataResponse } from './contact-data-response';
export interface ContactDataAddressesResponse extends BaseEntityResponse{
  address?: AddressResponse;
  addressId?: string;
  contactData?: ContactDataResponse;
  contactDataId?: string;
}
