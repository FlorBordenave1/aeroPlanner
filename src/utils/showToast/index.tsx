import Toast from "react-native-toast-message";

interface showToastProps {
  type: "error" | "success";
  message: string;
  label?: string;
}
export const showToast = ({ type, message, label }: showToastProps) => {
  Toast.show({
    type: type,
    text1: label,
    text2: message,
  });
};
