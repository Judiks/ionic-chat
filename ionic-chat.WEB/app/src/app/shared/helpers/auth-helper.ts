import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/swagger/models';
import { UserDto } from '../dto/user.dto';

@Injectable({
    providedIn: 'root'
})
export class AuthHelper {

    private user: UserDto;

    public setUser(model: UserDto) {
        this.user = model;
    }

    public getUser(): UserDto {
        return this.user;
    }

    public setUserOnLogin(model: LoginResponse) {
        this.user = {
            userName: model.userName,
            phoneNumber: model.phoneNumber,
            email: model.email,
            role: model.role
        } as UserDto;
        localStorage.setItem('auth-token', model.authToken);
    }
}
