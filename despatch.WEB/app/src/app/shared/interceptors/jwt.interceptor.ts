import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { AuthHelper } from '../helpers/auth.helper';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authHelper: AuthHelper, private spinner: NgxSpinnerService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request instanceof HttpRequest) {
            this.spinner.show();
        }
        const currentUser = this.authHelper.getUser();
        const isLoggedIn = currentUser && currentUser.authToken;
        const isApiUrl = request.url.startsWith(environment.apiURL);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.authToken}`,
                }
            });
        }
        return next.handle(request).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    this.spinner.hide();
                }
            })
        );
    }
}
