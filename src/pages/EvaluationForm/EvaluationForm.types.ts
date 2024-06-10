export interface Pilot {
  id: number;
  email: string;
  profile: Profile;
}
export interface Profile {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  document_number: string;
  document_type: Documenttype;
}
export interface Documenttype {
  id: number;
  name: string;
  alias: string;
}
