/* tslint:disable */
import { RoleModel } from './role-model';
export interface UserRequest {
  confirmPassword?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  role: RoleModel;
  userName?: string;
}
