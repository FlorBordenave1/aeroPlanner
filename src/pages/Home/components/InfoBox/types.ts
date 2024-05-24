import { ReactNode } from "react";

export interface InfoBoxProps {
  direccion?: "row" | "column";
  title?: string;
  cardDescription: string;
  cardTitle: string;
  icon: ReactNode;
  bg?: string;
}
