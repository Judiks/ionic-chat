/* tslint:disable */
import { UserRequest } from './user-request';
export interface RegisterRequest extends UserRequest{
  confirmPassword?: string;
}
