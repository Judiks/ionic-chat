/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CreateRoomResponse } from '../models/create-room-response';
import { CreateRoomRequest } from '../models/create-room-request';
import { RoomResponse } from '../models/room-response';
@Injectable({
  providedIn: 'root',
})
class RoomService extends __BaseService {
  static readonly RoomCreatePath = '/api/Room/Create';
  static readonly RoomGetUserRoomsPath = '/api/Room/GetUserRooms';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param model undefined
   */
  RoomCreateResponse(model: CreateRoomRequest): __Observable<__StrictHttpResponse<CreateRoomResponse>> {
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
        return _r as __StrictHttpResponse<CreateRoomResponse>;
      })
    );
  }
  /**
   * @param model undefined
   */
  RoomCreate(model: CreateRoomRequest): __Observable<CreateRoomResponse> {
    return this.RoomCreateResponse(model).pipe(
      __map(_r => _r.body as CreateRoomResponse)
    );
  }
  RoomGetUserRoomsResponse(): __Observable<__StrictHttpResponse<Array<RoomResponse>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
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
  }  RoomGetUserRooms(): __Observable<Array<RoomResponse>> {
    return this.RoomGetUserRoomsResponse().pipe(
      __map(_r => _r.body as Array<RoomResponse>)
    );
  }
}

module RoomService {
}

export { RoomService }
