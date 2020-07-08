/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserResponse } from '../models/user-response';
import { UserRequest } from '../models/user-request';
import { LoginRequest } from '../models/login-request';
import { SendConfirmSMSRequest } from '../models/send-confirm-smsrequest';
@Injectable({
  providedIn: 'root',
})
class AccountService extends __BaseService {
  static readonly AccountCreateUserPath = '/api/Account/CreateUser';
  static readonly AccountLoginPath = '/api/Account/Login';
  static readonly AccountSendRegisterSMSPath = '/api/Account/SendRegisterSMS';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param model undefined
   */
  AccountCreateUserResponse(model: UserRequest): __Observable<__StrictHttpResponse<UserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/CreateUser`,
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
  AccountCreateUser(model: UserRequest): __Observable<UserResponse> {
    return this.AccountCreateUserResponse(model).pipe(
      __map(_r => _r.body as UserResponse)
    );
  }

  /**
   * @param model undefined
   */
  AccountLoginResponse(model: LoginRequest): __Observable<__StrictHttpResponse<UserResponse>> {
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
        return _r as __StrictHttpResponse<UserResponse>;
      })
    );
  }
  /**
   * @param model undefined
   */
  AccountLogin(model: LoginRequest): __Observable<UserResponse> {
    return this.AccountLoginResponse(model).pipe(
      __map(_r => _r.body as UserResponse)
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
}

module AccountService {
}

export { AccountService }
