import { HttpHeaders } from '@angular/common/http';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const USER_KEY = 'user-token';

const USERNAME = 'user-name';

export const AUTH_CONST = {
  DEFAULT_HEADERS,
  USER_KEY,
  USERNAME,
};
