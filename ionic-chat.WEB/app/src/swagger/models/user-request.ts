/* tslint:disable */
import { RoleModel } from './role-model';
export interface UserRequest {
  email?: string;
  password?: string;
  phoneNumber?: string;
  role: RoleModel;
  userName?: string;
}
