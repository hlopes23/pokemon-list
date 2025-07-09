import { TitleRowProps } from "../../interfaces/Pokemon";

  export default function TitleRow({name}: TitleRowProps) {
    return (
      <div className="flex flex-row w-full justify-center mt-4 mb-4 lg:mb-10 lg:mt-10">
        <div className="lg:text-2xl font-bold uppercase">{name}</div>
      </div>
    );
  }