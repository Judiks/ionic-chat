/* tslint:disable */
import { IdentityUser } from './identity-user';
import { UserAddressResponse } from './user-address-response';
import { CityResponse } from './city-response';
import { CountryResponse } from './country-response';
import { UserImageResponse } from './user-image-response';
import { UserOrganizationResponse } from './user-organization-response';
import { UserPhoneNumbersResponse } from './user-phone-numbers-response';
import { UserUrlsResponse } from './user-urls-response';
export interface UserResponse extends IdentityUser{
  addresses?: Array<UserAddressResponse>;
  city?: CityResponse;
  cityId?: string;
  country?: CountryResponse;
  countryId?: string;
  creationDate: string;
  images?: Array<UserImageResponse>;
  organizations?: Array<UserOrganizationResponse>;
  phoneNumbers?: Array<UserPhoneNumbersResponse>;
  urls?: Array<UserUrlsResponse>;
}
