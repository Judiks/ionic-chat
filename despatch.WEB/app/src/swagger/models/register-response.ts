/* tslint:disable */
import { UserResponse } from './user-response';
import { Role } from './role';
export interface RegisterResponse extends UserResponse{
  role: Role;
}
