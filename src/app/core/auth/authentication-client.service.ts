import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  LogInParams,
  LogInResponse,
  SignUpParams,
  SignUpResponse,
} from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  private readonly _url = `${environment.baseUrl}/api/auth/`;

  constructor(private http: HttpClient) {}

  login(params: LogInParams): Observable<LogInResponse> {
    return this.http.post<LogInResponse>(this._url, params);
  }

  register(params: SignUpParams): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(this._url, params);
  }
}
