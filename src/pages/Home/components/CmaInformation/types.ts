interface CmaObject {
  title: string;
  cardTitle: string;
  cardDescription: string;
  type: CardTypes;
}

export type CardTypes = "error" | "warning" | "success";

export interface CmaInformationProps {
  data: CmaObject;
}
