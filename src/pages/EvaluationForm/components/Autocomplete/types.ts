export interface AutocompleteProps {
  data: Pilot[];
}

export interface Pilot {
  id: number;
  email: string;
  profile: Profile;
}
interface Profile {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  document_number: string;
  document_type: Documenttype;
}
interface Documenttype {
  id: number;
  name: string;
  alias: string;
}
