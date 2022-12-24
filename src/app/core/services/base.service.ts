import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '@core/base/base.response';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<T> {
  abstract readonly endpoint: string;
  private readonly _url: string = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  getAll(): Observable<BaseResponse<T[]>> {
    return this._http.get<BaseResponse<T[]>>(`${this._url}/${this.endpoint}`);
  }

  getOne(_id: string): Observable<BaseResponse<T>> {
    return this._http.get<BaseResponse<T>>(
      `${this._url}/${this.endpoint}/${_id}`
    );
  }

  create(_data: T): Observable<BaseResponse<T[]>> {
    return this._http.post<BaseResponse<T[]>>(
      `${this._url}/${this.endpoint}`,
      _data
    );
  }

  public update(_id: string, _data: T): Observable<BaseResponse<T>> {
    return this._http.patch<BaseResponse<T>>(
      `${this._url}/${this.endpoint}/${_id}`,
      _data
    );
  }

  public delete(_id: string): Observable<boolean> {
    return this._http.delete<boolean>(`${this._url}/${this.endpoint}/${_id}`);
  }
}
