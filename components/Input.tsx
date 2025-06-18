import { InputProps } from "@/interfaces/InputProps";

export default function Input({ value, onChange, placeholder }: InputProps) {

  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-[10%] h-[15%] bg-blue-500/25 rounded-lg"
    />
  );
}