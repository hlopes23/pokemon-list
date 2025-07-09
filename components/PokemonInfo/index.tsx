import Image from "next/image";
import { PokemonInfoProps } from "../../interfaces/PokemonInfoProps";
import Link from "next/link";
import TitleRow from "./TitleRow";
import InfoRow from "./InfoRow";
import AdditionalInfo from "./AdditionalInfo";


export default function PokemonInfo({pokemon}: PokemonInfoProps) {
  
  return (  
    <div className=" w-[80%] lg:w-[80%] h-[45dvh] lg:h-[75%] mt-15 lg:mt-0 m-auto border lg:p-10 align-middle border-white bg-white/10 rounded-lg shadow-md relative">
      <Link href='/'>
      <Image
        src="/arrow-down.png"
        alt="Arrow Logo"
        width={30}
        height={30}
        priority={true}
        className=" hidden lg:block ml-2 mt-6 lg:ml-6 lg:mt-10 absolute top-0 left-0 animate-bounce cursor-pointer rotate-90  transition-all duration-300"
      />
      </Link>
    <div className=" flex flex-col lg:flex-row p-4 h-full w-full items-center justify-evenly lg:justify-center"> 
    <div className=" w-[15%] lg:w-[50%] lg:h-full flex flex-col lg:flex-row lg:justify-center self-center my-auto">
      <Image
        src={pokemon?.image ?? ""}
        alt="Pokemon"
        width={300}
        height={0}
        priority={true}
        className=""
      />
    </div>
    <div className=" bg-white/20 w-full h-full lg:h-full lg:w-[50%] rounded-xl flex flex-col justify-evenly lg:pb-10">
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