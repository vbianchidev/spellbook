import { HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { LogInParams, SignUpParams } from './auth.types';

import { AuthenticationClient } from './authentication-client.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token = 'token';

  constructor(
    private _authClient: AuthenticationClient,
    private _router: Router
  ) {}

  isLoggedIn(): boolean {
    let token = localStorage.getItem(this._token);
    return token != null && token.length > 0;
  }

  getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this._token) : null;
  }

  login(params: LogInParams): void {
    this._authClient
      .login(params)
      .pipe(
        tap(data => {
          localStorage.setItem(this._token, data.token);
          this._router.navigate(['/']);
        })
      )
      .subscribe();
  }

  logout(): void {
    localStorage.removeItem(this._token);
    this._router.navigate(['/login']);
  }

  register(params: SignUpParams): void {
    this._authClient
      .register(params)
      .pipe(
        tap(data => {
          localStorage.setItem(this._token, data.token);
          this._router.navigate(['/']);
        })
      )
      .subscribe();
  }
}
