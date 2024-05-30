import { Text as TextNativeBase } from "native-base";
import { ReactNode } from "react";

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
  [key: string]: any;
}

const Text = ({
  font = "TITLE_MEDIUM",
  children,
  ...props
}: TextProps): React.ReactElement => {
  const FONTS = {
    BODY_REGULAR: {
      fontSize: 16,
      fontFamily: "Poppins",
      letterSpacing: 0.15,
    },
    TITLE_MEDIUM: {
      fontSize: 24,
      fontFamily: "Poppins-Medium",
      lineHeight: 36,
    },
    H2_SEMIBOLD: {
      fontSize: 20,
      fontFamily: "Poppins-Bold",
      lineHeight: 30,
      letterSpacing: 20 * -0.02,
    },
    H2_MEDIUM: {
      fontSize: 20,
      fontFamily: "Poppins-Medium",
      lineHeight: 30,
      letterSpacing: 20 * -0.02,
    },
    H3_SEMIBOLD: {
      fontSize: 18,
      fontFamily: "Poppins-Bold",
      lineHeight: 27,
      letterSpacing: 18 * -0.02,
    },
    H3_MEDIUM: {
      fontSize: 18,
      fontFamily: "Poppins-Medium",
      lineHeight: 30,
      letterSpacing: 18 * -0.02,
    },
    BODY_SEMIBOLD: {
      fontSize: 16,
      fontFamily: "Poppins-Bold",
      lineHeight: 27.2,
      letterSpacing: 0.15,
    },
    BODY_MEDIUM: {
      fontSize: 16,
      fontFamily: "Poppins-Medium",
      lineHeight: 27.2,
      letterSpacing: 0.15,
    },
    BT_SMALL_SEMIBOLD: {
      fontSize: 14,
      fontFamily: "Poppins-Bold",
      lineHeight: 24,
    },
    BT_SMALL_MEDIUM: {
      fontSize: 14,
      fontFamily: "Poppins-Medium",
      lineHeight: 27.2,
    },
    HELPER_TEXT_REGULAR: {
      fontSize: 14,
      fontFamily: "Poppins",
      lineHeight: 21,
      letterSpacing: 0.15,
    },
    CAPTION_MEDIUM: {
      fontSize: 12,
      fontFamily: "Poppins-Medium",
      lineHeight: 18,
      letterSpacing: 0.15,
    },
    CAPTION_REGULAR: {
      fontSize: 12,
      fontFamily: "Poppins",
      lineHeight: 18,
      letterSpacing: 0.15,
    },
  };

  return (
    <TextNativeBase style={FONTS[font]} {...props}>
      {children}
    </TextNativeBase>
  );
};

export default Text;
