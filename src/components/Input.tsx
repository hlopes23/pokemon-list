import { InputProps } from "../../interfaces/InputProps";

export default function Input({ value, onChange, placeholder }: InputProps) {

  return (
  <>
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </>
  );
}