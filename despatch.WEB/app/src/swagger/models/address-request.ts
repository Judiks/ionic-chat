/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { AddressType } from './address-type';
export interface AddressRequest extends BaseEntityRequest{
  deviceName?: string;
  type?: AddressType;
}
