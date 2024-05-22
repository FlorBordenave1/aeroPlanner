export interface ActionButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  isLoading: boolean;
  type?: string;
  spinner?: any;
  styles?: any;
}
