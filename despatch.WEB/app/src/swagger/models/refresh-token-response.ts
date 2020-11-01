/* tslint:disable */
import { UserResponse } from './user-response';
export interface RefreshTokenResponse extends UserResponse{
  authToken?: string;
  refreshToken?: string;
}
