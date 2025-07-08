import { TitleRowProps } from "../../interfaces/Pokemon";

  export default function TitleRow({name}: TitleRowProps) {
    return (
      <div className="flex flex-row w-full justify-center mb-10 mt-10">
        <div className="text-2xl font-bold uppercase">{name}</div>
      </div>
    );
  }