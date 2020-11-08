/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { AddressRequest } from './address-request';
import { UserRequest } from './user-request';
export interface UserAddressesRequest extends BaseEntityRequest{
  address?: AddressRequest;
  addressId?: string;
  user?: UserRequest;
  userId?: string;
}
