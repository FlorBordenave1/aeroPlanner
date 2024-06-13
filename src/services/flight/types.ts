export interface getFlightsResponse {
  success: boolean;
  data: Data;
}
interface Data {
  flights: Flight[];
}
export interface Flight {
  id: number;
  origin: string;
  destination: string;
  total_cycles: number;
  date: string;
  estimated_arrival_time: string;
  estimated_departure_time: string;
  pilot: Pilot;
  instructor?: any;
  plane: Plane;
  flight_detail?: any;
  status: Status;
}
interface Status {
  id: number;
  name: string;
}
interface Plane {
  id: number;
  name: string;
  flight_time: number;
  code: string;
}
interface Pilot {
  id: number;
  email: string;
  profile: Profile;
}
interface Profile {
  first_name: string;
  last_name: string;
  document_number: string;
  document_type: Documenttype;
  phone_number: string;
}
interface Documenttype {
  id: number;
  alias: string;
  name: string;
}
