interface CmaObject {
  title: string;
  cardTitle: string;
  cardDescription: string;
  type: "error" | "warning" | "success" | string;
}

export interface InfoBoxProps {
  data: CmaObject;
}
