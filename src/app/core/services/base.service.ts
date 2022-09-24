import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {
  private _url: string = environment.baseUrl;

  public abstract _route: string;  

  constructor(private _http: HttpClient) { }

  public getOne(): Observable<T> {
    return this._http.get<T>(`${this._url}/${this._route}`);
  }

  public getAll(_id: string): Observable<T[]> {
    return this._http.get<T[]>(`${this._url}/${this._route}/${_id}`);
  }

  public save(_data: T): Observable<T> {
    return this._http.post<T>(`${this._url}/${this._route}`, _data);
  }

  public update(_id: string, _data: T): Observable<T> {
    return this._http.patch<T>(`${this._url}/${this._route}/${_id}`, _data);
  }

  public delete(_id: string): Observable<boolean> {
    return this._http.delete<boolean>(`${this._url}/${this._route}/${_id}`);
  }

}
