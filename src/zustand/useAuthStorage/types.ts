export interface IAuthStore {
  user: authResponse | null;
  token: string | null;
  setUser: (user: authResponse) => void;
  setToken: (token: string) => void;
}

export interface User {
  email: string;
  id: number;
  profile: Profile;
  role: Role;
}

export interface Profile {
  document_number: string;
  document_type: string[];
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string;
}

export interface Role {
  id: number;
  name: string;
}

export interface authResponse {
  token: string;
  user: User;
}
