import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<T> {
  private readonly _url: string = environment.baseUrl;

  public abstract readonly endpoint: string;

  constructor(private _http: HttpClient) {}

  public getAll(): Observable<T[]> {
    return this._http.get<T[]>(`${this._url}/${this.endpoint}`);
  }

  public getOne(_id: string): Observable<T> {
    return this._http.get<T>(`${this._url}/${this.endpoint}/${_id}`);
  }

  public create(_data: T): Observable<T> {
    return this._http.post<T>(`${this._url}/${this.endpoint}`, _data);
  }

  public update(_id: string, _data: T): Observable<T> {
    return this._http.patch<T>(`${this._url}/${this.endpoint}/${_id}`, _data);
  }

  public delete(_id: string): Observable<boolean> {
    return this._http.delete<boolean>(`${this._url}/${this.endpoint}/${_id}`);
  }
}
