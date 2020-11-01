import { RoleModel } from 'src/swagger/models';

export class UserDto {
    id: string;
    email?: string;
    phoneNumber?: string;
    role: RoleModel;
    userName?: string;
    authToken: string;
    refreshToken: string;
}
