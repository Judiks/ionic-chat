/* tslint:disable */
import { UserResponse } from './user-response';
export interface LoginResponse extends UserResponse{
  authToken?: string;
}
