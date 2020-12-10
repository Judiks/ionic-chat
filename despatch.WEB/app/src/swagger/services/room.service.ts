/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RoomResponse } from '../models/room-response';
import { CreateRoomRequest } from '../models/create-room-request';
import { CreateRoomFromContactRequest } from '../models/create-room-from-contact-request';
import { GetRoomByContactRequest } from '../models/get-room-by-contact-request';
import { GetRoomDataRequest } from '../models/get-room-data-request';
import { GetRoomContactsResponse } from '../models/get-room-contacts-response';
import { GetRoomContactsRequest } from '../models/get-room-contacts-request';
@Injectable({
  providedIn: 'root',
})
class RoomService extends __BaseService {
  static readonly RoomCreatePath = '/api/Room/Create';
  static readonly RoomCreateFromContactPath = '/api/Room/CreateFromContact';
  static readonly RoomGetRoomByContactPath = '/api/Room/GetRoomByContact';
  static readonly RoomGetUserRoomsPath = '/api/Room/GetUserRooms';
  static readonly RoomGetRoomContactsPath = '/api/Room/GetRoomContacts';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param model undefined
   */
  RoomCreateResponse(model: CreateRoomRequest): __Observable<__StrictHttpResponse<RoomResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Room/Create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RoomResponse>;
      })
    );
  }
  /**
   * @param model undefined
   */
  RoomCreate(model: CreateRoomRequest): __Observable<RoomResponse> {
    return this.RoomCreateResponse(model).pipe(
      __map(_r => _r.body as RoomResponse)
    );
  }

  /**
   * @param model undefined
   */
  RoomCreateFromContactResponse(model: CreateRoomFromContactRequest): __Observable<__StrictHttpResponse<RoomResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Room/CreateFromContact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RoomResponse>;
      })
    );
  }
  /**
   * @param model undefined
   */
  RoomCreateFromContact(model: CreateRoomFromContactRequest): __Observable<RoomResponse> {
    return this.RoomCreateFromContactResponse(model).pipe(
      __map(_r => _r.body as RoomResponse)
    );
  }

  /**
   * @param request undefined
   */
  RoomGetRoomByContactResponse(request: GetRoomByContactRequest): __Observable<__StrictHttpResponse<RoomResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Room/GetRoomByContact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RoomResponse>;
      })
    );
  }
  /**
   * @param request undefined
   */
  RoomGetRoomByContact(request: GetRoomByContactRequest): __Observable<RoomResponse> {
    return this.RoomGetRoomByContactResponse(request).pipe(
      __map(_r => _r.body as RoomResponse)
    );
  }

  /**
   * @param request undefined
   */
  RoomGetUserRoomsResponse(request: GetRoomDataRequest): __Observable<__StrictHttpResponse<Array<RoomResponse>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Room/GetUserRooms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RoomResponse>>;
      })
    );
  }
  /**
   * @param request undefined
   */
  RoomGetUserRooms(request: GetRoomDataRequest): __Observable<Array<RoomResponse>> {
    return this.RoomGetUserRoomsResponse(request).pipe(
      __map(_r => _r.body as Array<RoomResponse>)
    );
  }

  /**
   * @param request undefined
   */
  RoomGetRoomContactsResponse(request: GetRoomContactsRequest): __Observable<__StrictHttpResponse<GetRoomContactsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Room/GetRoomContacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetRoomContactsResponse>;
      })
    );
  }
  /**
   * @param request undefined
   */
  RoomGetRoomContacts(request: GetRoomContactsRequest): __Observable<GetRoomContactsResponse> {
    return this.RoomGetRoomContactsResponse(request).pipe(
      __map(_r => _r.body as GetRoomContactsResponse)
    );
  }
}

module RoomService {
}

export { RoomService }
