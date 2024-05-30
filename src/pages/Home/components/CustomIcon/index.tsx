import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { theme } from "../../../../../theme";

interface CustomIconProps {
  name: any;
  size?: number;
  color?: string;
  iconType?: "MaterialCommunityIcons" | "AntDesign";
}

const ICON_COLOR = theme.colors.primary05;

const CustomIcon = ({ name, size, color, iconType }: CustomIconProps) => {
  const IconComponent =
    iconType === "AntDesign" ? AntDesign : MaterialCommunityIcons;

  return (
    <IconComponent name={name} size={size || 20} color={color || ICON_COLOR} />
  );
};

export default CustomIcon;
