import { RoleModel } from 'src/swagger/models';

export class UserDto {
    email?: string;
    password?: string;
    phoneNumber?: string;
    role: RoleModel;
    userName?: string;
}
