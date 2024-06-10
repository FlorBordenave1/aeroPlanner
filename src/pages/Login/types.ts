export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  email: string;
  id: number;
  profile: {
    document_number: string;
    document_type: string[];
    first_name: string;
    id: number;
    last_name: string;
    phone_number: string;
  };
  role: {
    id: number;
    name: string;
  };
}
