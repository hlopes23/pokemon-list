
export interface InputProps {
  value: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onEnter?: () => void;
}
