import { AditionalInfoProps } from "../../interfaces/Pokemon";

export default function AdditionalInfo({ability, hiddenAbility}: AditionalInfoProps) {
    return (
      <div className="flex flex-row justify-around w-full gap-4 p-3 capitalize">
        <div className="w-[40%] flex flex-col items-center justify-end text-md">
          <div className="">ability</div>
         <div className="font-bold">{ability}</div>
        </div>
        <div className="w-[40%] flex flex-col items-center text-md">
         <div className="">hidden ability</div>
         <div className="font-bold ">{hiddenAbility}</div>
        </div></div>
    );
  }