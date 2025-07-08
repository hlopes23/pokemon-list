import Image from "next/image";
import { PokemonInfoProps } from "../../interfaces/PokemonInfoProps";
import Link from "next/link";
import TitleRow from "./TitleRow";
import InfoRow from "./InfoRow";
import AdditionalInfo from "./AdditionalInfo";


export default function PokemonInfo({pokemon}: PokemonInfoProps) {
  
  return (  
    <div className="w-[80%] h-[75%] m-auto border p-10 align-middle border-white bg-white/10 rounded-lg shadow-md relative">
      <Link href='/'>
      <Image
        src="/arrow-down.png"
        alt="Arrow Logo"
        width={30}
        height={30}
        className="ml-6 mt-10 absolute top-0 left-0 animate-bounce cursor-pointer rotate-90  transition-all duration-300"
      />
      </Link>
    <div className=" flex flex-row p-4 h-full w-full justify-center"> 
    <div className=" w-[50%] h-full flex flex-row justify-center my-auto">
      <Image
        src={pokemon?.image ?? ""}
        alt="Pokemon"
        width={300}
        height={300}
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