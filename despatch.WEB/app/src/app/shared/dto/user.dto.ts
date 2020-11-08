import { Role } from 'src/swagger/models';

export class UserDto {
    id: string;
    email?: string;
    phoneNumber?: string;
    role: Role;
    userName?: string;
    authToken: string;
    refreshToken: string;
}
