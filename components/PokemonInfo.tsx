import Image from "next/image";
import { InfoRowProps, TitleRowProps, AditionalInfoProps, Pokemon } from "../interfaces/Pokemon";
import { PokemonInfoProps } from "../interfaces/PokemonInfoProps";


  function TitleRow({name}: TitleRowProps) {
    return (
      <div className="flex flex-row w-full justify-center mb-10 mt-10">
        <div className="text-2xl font-bold uppercase">{name}</div>
      </div>
    );
  }


  function InfoRow({label, value}: InfoRowProps) { 
    return (
      <div className="flex flex-row justify-center w-full gap-4 capitalize">
        <div className="w-[40%] flex justify-end text-md font-light">{label}</div>
        <div className="w-[40%] flex justify-start text-md font-bold">{value}</div>
      </div>
    );
  }

  function AdditionalInfo({ability, hiddenAbility}: AditionalInfoProps) {
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

export default function PokemonInfo({pokemon}: PokemonInfoProps) {
  
  return (  
    <div className="w-[80%] h-[75%] m-auto border p-10 align-middle border-white bg-white/10 rounded-lg shadow-md relative">
      <Image
        src="/arrow-down.png"
        alt="Arrow Logo"
        width={30}
        height={30}
        className=" ml-6 mt-10 h-auto w-auto absolute top-0 left-0 self-center animate-bounce hover:scale-110 cursor-pointer rotate-90  transition-all duration-300"
      />
    <div className=" flex flex-row p-4 h-full w-full gap-50"> 
    <div className=" w-[50%] flex flex-row justify-center items-center">
      <Image
        src={pokemon?.image ?? ""}
        alt="Pokemon"
        width={450}
        height={100}
        priority={true}
        className=""
      />
    </div>
    <div className=" bg-white/20 w-[50%] rounded-xl flex flex-col justify-evenly pb-10">
      <TitleRow name={pokemon?.name ?? ""} />
      <InfoRow label="type" value={pokemon?.type} />
      <InfoRow label="hp" value={pokemon?.hp}/>
      <InfoRow label="attack" value={pokemon?.attack}/>     
      <InfoRow label="defense" value={pokemon?.defense}/>
      <InfoRow label="special attack" value={pokemon?.specialAttack}/>
      <InfoRow label="special defense" value={pokemon?.specialDefense}/>
      <InfoRow label="speed" value={pokemon?.speed}/>
      <InfoRow label="height" value={pokemon?.height}/>
      <InfoRow label="weight" value={pokemon?.weight}/>
      <AdditionalInfo ability={pokemon?.ability ?? ""} hiddenAbility={pokemon?.hiddenAbility ?? ""} />
    </div>    
    </div>
    </div>
  );
}