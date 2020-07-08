/* tslint:disable */
import { RoleModel } from './role-model';
export interface UserResponse {
  email?: string;
  password?: string;
  phoneNumber?: string;
  role: RoleModel;
  userName?: string;
}
