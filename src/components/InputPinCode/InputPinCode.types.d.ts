export interface InputPinCodeProps {
  autofocus?: boolean;
  size: number;
  value: string;
  loading?: boolean;
  secure?: boolean;
  error?: string;
  onFinish?: (value: string) => void;
  onChange?: (value: string) => void;
}
  