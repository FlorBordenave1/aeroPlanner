import { Text as TextNativeBase } from "native-base";
import { ReactNode } from "react";
import { FONTS } from "./fonts";

interface TextProps {
  font:
    | "TITLE_MEDIUM"
    | "H2_SEMIBOLD"
    | "H2_MEDIUM"
    | "TITLE_MEDIUM"
    | "H2_SEMIBOLD"
    | "H2_MEDIUM"
    | "H3_SEMIBOLD"
    | "H3_MEDIUM"
    | "BODY_SEMIBOLD"
    | "BODY_MEDIUM"
    | "BODY_REGULAR"
    | "BT_SMALL_SEMIBOLD"
    | "BT_SMALL_MEDIUM"
    | "HELPER_TEXT_REGULAR"
    | "CAPTION_MEDIUM"
    | "CAPTION_REGULAR";
  children: ReactNode;
  color?: string;
  [key: string]: any;
}

const Text = ({
  font = "TITLE_MEDIUM",
  children,
  color,
  ...props
}: TextProps): React.ReactElement => {
  const defaultFontStyle = {
    ...FONTS[font],
    //@ts-ignore
    color: color || FONTS[font]?.color,
  };

  return (
    <TextNativeBase {...props} style={defaultFontStyle}>
      {children}
    </TextNativeBase>
  );
};

export default Text;
