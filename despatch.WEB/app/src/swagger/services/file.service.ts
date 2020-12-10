/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DownloadFileRequest } from '../models/download-file-request';
@Injectable({
  providedIn: 'root',
})
class FileService extends __BaseService {
  static readonly FileDownloadPath = '/api/File/Download';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param request undefined
   */
  FileDownloadResponse(request: DownloadFileRequest): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/File/Download`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Blob>;
      })
    );
  }
  /**
   * @param request undefined
   */
  FileDownload(request: DownloadFileRequest): __Observable<Blob> {
    return this.FileDownloadResponse(request).pipe(
      __map(_r => _r.body as Blob)
    );
  }
}

module FileService {
}

export { FileService }
