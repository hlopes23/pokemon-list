import { InputProps } from "../interfaces/InputProps";

export default function Input({ value, onChange, placeholder }: InputProps) {

  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className=" w-2l bg-white/25 rounded-lg border border-white p-3 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 max-w-md"
    />
  );
}