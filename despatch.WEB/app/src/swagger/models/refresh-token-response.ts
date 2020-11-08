/* tslint:disable */
import { UserResponse } from './user-response';
import { Role } from './role';
export interface RefreshTokenResponse extends UserResponse{
  authToken?: string;
  refreshToken?: string;
  role: Role;
}
