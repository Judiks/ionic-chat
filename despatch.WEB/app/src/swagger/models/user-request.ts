/* tslint:disable */
import { RoleModel } from './role-model';
export interface UserRequest {
  email?: string;
  id?: string;
  password?: string;
  phoneNumber?: string;
  role: RoleModel;
  userName?: string;
}
