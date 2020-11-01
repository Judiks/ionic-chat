/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContactResponse } from '../models/contact-response';
import { ContactRequest } from '../models/contact-request';
import { GetContactDataRequest } from '../models/get-contact-data-request';
@Injectable({
  providedIn: 'root',
})
class ContactService extends __BaseService {
  static readonly ContactSaveAllFromNativePath = '/api/Contact';
  static readonly ContactGetContactDataPath = '/api/Contact';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param model undefined
   */
  ContactSaveAllFromNativeResponse(model: Array<ContactRequest>): __Observable<__StrictHttpResponse<Array<ContactResponse>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Contact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactResponse>>;
      })
    );
  }
  /**
   * @param model undefined
   */
  ContactSaveAllFromNative(model: Array<ContactRequest>): __Observable<Array<ContactResponse>> {
    return this.ContactSaveAllFromNativeResponse(model).pipe(
      __map(_r => _r.body as Array<ContactResponse>)
    );
  }

  /**
   * @param model undefined
   */
  ContactGetContactDataResponse(model: GetContactDataRequest): __Observable<__StrictHttpResponse<Array<ContactResponse>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Contact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactResponse>>;
      })
    );
  }
  /**
   * @param model undefined
   */
  ContactGetContactData(model: GetContactDataRequest): __Observable<Array<ContactResponse>> {
    return this.ContactGetContactDataResponse(model).pipe(
      __map(_r => _r.body as Array<ContactResponse>)
    );
  }
}

module ContactService {
}

export { ContactService }
