interface FlightInfo {
  date: string;
  time: string;
  remainingDays: number;
  withInstructor: boolean;
  planeModel: string;
  destination: string;
  origin: string;
}

export interface FlightInfoBoxProps {
  flightInfo: FlightInfo;
  onClick: () => void;
}
