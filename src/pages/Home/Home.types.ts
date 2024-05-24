export interface CmaObject {
  title: string;
  cardTitle: string;
  cardDescription: string;
  type: "error" | "warning" | "success" | string;
}

interface DataProps {
  title: string;
}

export type LicenceList = DataProps[];
