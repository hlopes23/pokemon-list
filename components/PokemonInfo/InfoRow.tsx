import { InfoRowProps } from "../../interfaces/Pokemon";

export default function InfoRow({label, value}: InfoRowProps) { 
    return (
      <div className="flex flex-row justify-center w-full gap-4 capitalize">
        <div className="w-[40%] flex justify-end text-md font-light">{label}</div>
        <div className="w-[40%] flex justify-start text-md font-bold">{value}</div>
      </div>
    );
  }