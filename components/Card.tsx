'use client';

import Image from "next/image";
import  {PokemonGridDisplay}  from "../interfaces/Pokemon";



export default function Card( {pokemon} : {pokemon: PokemonGridDisplay}) {

  return (
    <div className="bg-white/20 h-[280px] w-[80%] border border-white/30 rounded-lg shadow-lg p-4">
      <div className="flex flex-col justify-between items-center rounded-md h-full">
      <Image
       src={pokemon.image}
        alt={pokemon.name}
        width={170}
        height={170}
        priority= {false}
       className="mx-auto mb-3 h-[60%]"></Image>
      <div className=" text-lg p-4 text-center capitalize bg-white/20 rounded-md w-full mx-auto">
        <p>{pokemon.name}</p>
      </div>
    </div>
    </div>
  );
}
