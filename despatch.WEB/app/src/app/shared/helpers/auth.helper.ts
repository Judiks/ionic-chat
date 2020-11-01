import { HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError, Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { switchMap, finalize, filter, take, catchError } from 'rxjs/operators';
import { LoginResponse } from 'src/swagger/models';
import { RefreshTokenRequest } from 'src/swagger/models/refresh-token-request';
import { RefreshTokenResponse } from 'src/swagger/models/refresh-token-response';
import { AuthService } from 'src/swagger/services/auth.service';
import { UserDto } from '../dto/user.dto';

@Injectable({
    providedIn: 'root'
})
export class AuthHelper {
    private isRefreshing: boolean;
    private refreshTokenSubject: BehaviorSubject<any>;
    private currentUser: BehaviorSubject<UserDto>;
    public user: Observable<UserDto>;

    constructor(public authService: AuthService, private router: Router) {
        this.isRefreshing = false;
        this.refreshTokenSubject = new BehaviorSubject<any>(null);
        this.currentUser = new BehaviorSubject<UserDto>(JSON.parse(localStorage.getItem('current-user')));
        this.user = this.currentUser.asObservable();
    }

    public setUser(model: UserDto) {
        this.currentUser.next(model);
    }

    public setUserOnRefreshToken(model: RefreshTokenResponse) {
        this.currentUser.next({
            email: model.email,
            phoneNumber: model.phoneNumber,
            role: model.role,
            userName: model.userName,
            authToken: model.authToken,
            refreshToken: model.refreshToken,
        } as UserDto);
        localStorage.setItem('current-user', JSON.stringify(model));
    }

    public getUser(): UserDto {
        return this.currentUser.value;
    }

    public setUserOnLogin(model: LoginResponse) {
        this.currentUser.next({
            id: model.id,
            userName: model.userName,
            phoneNumber: model.phoneNumber,
            email: model.email,
            role: model.role,
            refreshToken: model.refreshToken,
            authToken: model.authToken
        } as UserDto);
        localStorage.setItem('auth-token', model.authToken);
        localStorage.setItem('refresh-token', model.refreshToken);
        localStorage.setItem('current-user', JSON.stringify(model));
    }

    public handle401withRefresh(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            const requestToken: RefreshTokenRequest = {
                refreshToken: this.getUser().refreshToken
            };
            return this.authService.AuthRefreshToken(requestToken).pipe(
                switchMap((user: RefreshTokenResponse) => {
                    if (user) {
                        this.setUserOnRefreshToken(user);
                        this.refreshTokenSubject.next(user.refreshToken);
                        return next.handle(this.addToken(request, user.authToken));
                    }
                    this.authService.AuthLogout();
                    this.isRefreshing = false;
                })
            );
        }

        return this.refreshTokenSubject.pipe(
            filter(token => token != null),
            take(1),
            switchMap(jwt => {
                return next.handle(this.addToken(request, jwt));
            }), catchError(err => {
                return throwError(err);
            }));
    }

    public addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    public logout() {
        this.authService.AuthLogout().subscribe(() => {
            localStorage.removeItem('currentUser');
            this.currentUser.next(null);
            this.router.navigate(['account']);
        });
    }
}
