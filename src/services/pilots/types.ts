export interface GetPilotsResponse {
  success: boolean;
  data: Data;
}

export interface Data {
  id: number;
  email: string;
  profile: Profile;
}

export interface Profile {
  first_name: string;
  last_name: string;
  phone_number: string;
  document_number: string;
  document_type: DocumentType;
}

export interface DocumentType {
  id: number;
  name: string;
  alias: string;
}
