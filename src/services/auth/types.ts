export interface IAuthenticationService {
  login: (credentials: LoginBody) => Promise<LoginResponse>;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
interface User {
  email: string;
  id: number;
  profile: Profile;
  role: Role;
}
interface Role {
  id: number;
  name: string;
}
interface Profile {
  document_number: string;
  document_type: string[];
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string;
}
