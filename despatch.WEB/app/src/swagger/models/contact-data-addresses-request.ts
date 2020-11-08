/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { AddressRequest } from './address-request';
import { ContactDataRequest } from './contact-data-request';
export interface ContactDataAddressesRequest extends BaseEntityRequest{
  address?: AddressRequest;
  addressId?: string;
  contactData?: ContactDataRequest;
  contactDataId?: string;
}
