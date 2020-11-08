/* tslint:disable */
import { UserRequest } from './user-request';
import { Role } from './role';
export interface RegisterRequest extends UserRequest{
  confirmPassword?: string;
  password?: string;
  role: Role;
}
