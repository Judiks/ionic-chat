/* tslint:disable */
import { IdentityUser } from './identity-user';
import { UserAddressesResponse } from './user-addresses-response';
import { CityResponse } from './city-response';
import { CountryResponse } from './country-response';
import { UserImagesResponse } from './user-images-response';
import { UserOrganizationsResponse } from './user-organizations-response';
import { UserPhoneNumbersResponse } from './user-phone-numbers-response';
import { UserUrlsResponse } from './user-urls-response';
export interface UserResponse extends IdentityUser{
  addresses?: Array<UserAddressesResponse>;
  city?: CityResponse;
  cityId?: string;
  country?: CountryResponse;
  countryId?: string;
  creationDate: string;
  images?: Array<UserImagesResponse>;
  organizations?: Array<UserOrganizationsResponse>;
  phoneNumbers?: Array<UserPhoneNumbersResponse>;
  urls?: Array<UserUrlsResponse>;
}
