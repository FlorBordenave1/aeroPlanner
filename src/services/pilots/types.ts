type DocType = {
  id: number;
  name: string;
  alias: string;
};

type Profile = {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  document_number: string;
  document_type: DocType;
};

type Pilot = {
  id: number;
  email: string;
  profile: Profile;
};

export interface GetPilotsResponse {
  success: boolean;
  pilots: Pilot[];
}
