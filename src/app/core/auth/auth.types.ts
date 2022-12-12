export interface LogInParams {
  username: string;
  password: string;
}

export interface SignUpParams {
  username: string;
  password: string;
  email: string;
}

export interface LogOutParams {
  token: string;
}

export interface LogInResponse {
  token: string;
  username: string;
}

export interface SignUpResponse {
  token: string;
}

export interface LogoutResponse {}
