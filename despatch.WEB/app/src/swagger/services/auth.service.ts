/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RegisterResponse } from '../models/register-response';
import { RegisterRequest } from '../models/register-request';
import { LoginResponse } from '../models/login-response';
import { LoginRequest } from '../models/login-request';
import { SendConfirmSMSRequest } from '../models/send-confirm-smsrequest';
import { RefreshTokenResponse } from '../models/refresh-token-response';
import { RefreshTokenRequest } from '../models/refresh-token-request';
@Injectable({
  providedIn: 'root',
})
class AuthService extends __BaseService {
  static readonly AuthRegisterPath = '/api/Auth/Register';
  static readonly AuthLoginPath = '/api/Auth/Login';
  static readonly AuthSendRegisterSMSPath = '/api/Auth/SendRegisterSMS';
  static readonly AuthCheckUserNamePath = '/api/Auth/CheckUserName';
  static readonly AuthCheckUserEmailPath = '/api/Auth/CheckUserEmail';
  static readonly AuthRefreshTokenPath = '/api/Auth/RefreshToken';
  static readonly AuthLogoutPath = '/api/Auth/Logout';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param model undefined
   */
  AuthRegisterResponse(model: RegisterRequest): __Observable<__StrictHttpResponse<RegisterResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Auth/Register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisterResponse>;
      })
    );
  }
  /**
   * @param model undefined
   */
  AuthRegister(model: RegisterRequest): __Observable<RegisterResponse> {
    return this.AuthRegisterResponse(model).pipe(
      __map(_r => _r.body as RegisterResponse)
    );
  }

  /**
   * @param model undefined
   */
  AuthLoginResponse(model: LoginRequest): __Observable<__StrictHttpResponse<LoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Auth/Login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoginResponse>;
      })
    );
  }
  /**
   * @param model undefined
   */
  AuthLogin(model: LoginRequest): __Observable<LoginResponse> {
    return this.AuthLoginResponse(model).pipe(
      __map(_r => _r.body as LoginResponse)
    );
  }

  /**
   * @param model undefined
   */
  AuthSendRegisterSMSResponse(model: SendConfirmSMSRequest): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Auth/SendRegisterSMS`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param model undefined
   */
  AuthSendRegisterSMS(model: SendConfirmSMSRequest): __Observable<string> {
    return this.AuthSendRegisterSMSResponse(model).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param model undefined
   */
  AuthCheckUserNameResponse(model?: null | string): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (model != null) __params = __params.set('model', model.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Auth/CheckUserName`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param model undefined
   */
  AuthCheckUserName(model?: null | string): __Observable<boolean> {
    return this.AuthCheckUserNameResponse(model).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param model undefined
   */
  AuthCheckUserEmailResponse(model?: null | string): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (model != null) __params = __params.set('model', model.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Auth/CheckUserEmail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param model undefined
   */
  AuthCheckUserEmail(model?: null | string): __Observable<boolean> {
    return this.AuthCheckUserEmailResponse(model).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param request undefined
   */
  AuthRefreshTokenResponse(request: RefreshTokenRequest): __Observable<__StrictHttpResponse<RefreshTokenResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Auth/RefreshToken`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RefreshTokenResponse>;
      })
    );
  }
  /**
   * @param request undefined
   */
  AuthRefreshToken(request: RefreshTokenRequest): __Observable<RefreshTokenResponse> {
    return this.AuthRefreshTokenResponse(request).pipe(
      __map(_r => _r.body as RefreshTokenResponse)
    );
  }
  AuthLogoutResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Auth/Logout`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  AuthLogout(): __Observable<null> {
    return this.AuthLogoutResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AuthService {
}

export { AuthService }
