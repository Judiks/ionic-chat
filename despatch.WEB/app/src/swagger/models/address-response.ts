/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { AddressType } from './address-type';
export interface AddressResponse extends BaseEntityResponse{
  deviceName?: string;
  type?: AddressType;
}
