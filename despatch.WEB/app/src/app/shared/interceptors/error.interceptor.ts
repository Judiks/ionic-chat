import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthHelper } from '../helpers/auth.helper';
import { ToastsHelper } from '../helpers/toasts.helper';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authHelper: AuthHelper, private toasts: ToastsHelper,
                private spinner: NgxSpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                this.spinner.hide();
                const isTokenExpired = err.headers.has('token-expired');
                const isRefreshTokenInvalid = err.headers.has('invalid-refresh-token');
                if (err instanceof HttpErrorResponse && err.status === 401 && isTokenExpired && !isRefreshTokenInvalid) {
                    return this.authHelper.handle401withRefresh(request, next);
                }

                if (err instanceof HttpErrorResponse && err.status === 401 && (!isTokenExpired || isRefreshTokenInvalid)) {
                    this.authHelper.logout();
                }
                if (err instanceof HttpErrorResponse && err.status === 403) {
                    this.toasts.error('You have not permission for this page');
                }
                if (err instanceof HttpErrorResponse && err.status === 400) {
                    this.toasts.error('Internal server error');
                }
                if (err instanceof HttpErrorResponse && err.status === 500) {
                    this.toasts.error(err.error);
                }
                return throwError(err);
            })
        );
    }


}
