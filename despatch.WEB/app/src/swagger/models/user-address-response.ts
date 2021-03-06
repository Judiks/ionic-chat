/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { AddressResponse } from './address-response';
import { UserResponse } from './user-response';
export interface UserAddressResponse extends BaseEntityResponse{
  address?: AddressResponse;
  addressId?: string;
  user?: UserResponse;
  userId?: string;
}
