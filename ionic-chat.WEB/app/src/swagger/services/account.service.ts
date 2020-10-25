/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserResponse } from '../models/user-response';
import { RegisterRequest } from '../models/register-request';
import { LoginResponse } from '../models/login-response';
import { LoginRequest } from '../models/login-request';
import { SendConfirmSMSRequest } from '../models/send-confirm-smsrequest';
@Injectable({
  providedIn: 'root',
})
class AccountService extends __BaseService {
  static readonly AccountRegisterPath = '/api/Account/Register';
  static readonly AccountLoginPath = '/api/Account/Login';
  static readonly AccountSendRegisterSMSPath = '/api/Account/SendRegisterSMS';
  static readonly AccountCheckUserNamePath = '/api/Account/CheckUserName';
  static readonly AccountCheckUserEmailPath = '/api/Account/CheckUserEmail';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param model undefined
   */
  AccountRegisterResponse(model: RegisterRequest): __Observable<__StrictHttpResponse<UserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/Register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserResponse>;
      })
    );
  }
  /**
   * @param model undefined
   */
  AccountRegister(model: RegisterRequest): __Observable<UserResponse> {
    return this.AccountRegisterResponse(model).pipe(
      __map(_r => _r.body as UserResponse)
    );
  }

  /**
   * @param model undefined
   */
  AccountLoginResponse(model: LoginRequest): __Observable<__StrictHttpResponse<LoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/Login`,
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
  AccountLogin(model: LoginRequest): __Observable<LoginResponse> {
    return this.AccountLoginResponse(model).pipe(
      __map(_r => _r.body as LoginResponse)
    );
  }

  /**
   * @param model undefined
   */
  AccountSendRegisterSMSResponse(model: SendConfirmSMSRequest): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/SendRegisterSMS`,
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
  AccountSendRegisterSMS(model: SendConfirmSMSRequest): __Observable<string> {
    return this.AccountSendRegisterSMSResponse(model).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param model undefined
   */
  AccountCheckUserNameResponse(model?: null | string): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (model != null) __params = __params.set('model', model.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/CheckUserName`,
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
  AccountCheckUserName(model?: null | string): __Observable<boolean> {
    return this.AccountCheckUserNameResponse(model).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param model undefined
   */
  AccountCheckUserEmailResponse(model?: null | string): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (model != null) __params = __params.set('model', model.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/CheckUserEmail`,
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
  AccountCheckUserEmail(model?: null | string): __Observable<boolean> {
    return this.AccountCheckUserEmailResponse(model).pipe(
      __map(_r => _r.body as boolean)
    );
  }
}

module AccountService {
}

export { AccountService }
