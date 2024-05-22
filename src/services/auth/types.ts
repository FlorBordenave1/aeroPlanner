export interface IAuthenticationService {
  login: (credentials: LoginBody) => Promise<LoginResponse>;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    role: {
      id: number;
      name: string;
    };
  };
}
