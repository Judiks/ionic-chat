/* tslint:disable */
import { RoleModel } from './role-model';
export interface UserResponse {
  email?: string;
  id?: string;
  phoneNumber?: string;
  role: RoleModel;
  userName?: string;
}
