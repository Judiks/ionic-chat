/* tslint:disable */
import { IdentityUser } from './identity-user';
import { UserAddressesRequest } from './user-addresses-request';
import { CityRequest } from './city-request';
import { CountryRequest } from './country-request';
import { UserImagesRequest } from './user-images-request';
import { UserOrganizationsRequest } from './user-organizations-request';
import { UserPhoneNumbersRequest } from './user-phone-numbers-request';
import { UserUrlsRequest } from './user-urls-request';
export interface UserRequest extends IdentityUser{
  addresses?: Array<UserAddressesRequest>;
  city?: CityRequest;
  cityId?: string;
  country?: CountryRequest;
  countryId?: string;
  creationDate: string;
  images?: Array<UserImagesRequest>;
  organizations?: Array<UserOrganizationsRequest>;
  phoneNumbers?: Array<UserPhoneNumbersRequest>;
  urls?: Array<UserUrlsRequest>;
}
