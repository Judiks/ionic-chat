/* tslint:disable */
import { RoleModel } from './role-model';
export interface UserResponse {
  email?: string;
  phoneNumber?: string;
  role: RoleModel;
  userName?: string;
}
