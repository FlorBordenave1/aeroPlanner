export interface CmaObject {
  title: string;
  cardTitle: string;
  cardDescription: string;
  type: CardTypes;
}

export type CardTypes = "error" | "warning" | "success";

interface DataProps {
  title: string;
}

export type LicenceList = DataProps[];
