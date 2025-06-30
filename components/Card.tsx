'use client';

import Image from "next/image";
import { useSearch } from "../context/SearchContext";
import { PokemonGridDisplay } from "../interfaces/Pokemon";

export default function Card({ pokemon }: { pokemon: PokemonGridDisplay }) {
  const { search } = useSearch();


  function highlightName(name: string, search: string) {
    if (!search) return name;
    const regex = new RegExp(`(${search})`, "ig");
    return name.split(regex).map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={i} className="bg-green-500 rounded">{part}</span>
      ) : (
        part
      )
    );
  }

  return (
    <div className="bg-white/20 h-[280px] w-[80%] border border-white/30 rounded-lg shadow-lg p-4">
      <div className="flex flex-col justify-between items-center rounded-md h-full">
      <Image
       src={pokemon.image}
        alt={pokemon.name}
        width={150}
        height={150}
        priority= {false}
       className="mx-auto mb-3 h-[60%]"></Image>
      <div className="text-lg p-4 text-center capitalize bg-white/20 rounded-md w-full mx-auto">
        <p>{highlightName(pokemon.name, search)}</p>
      </div>
    </div>
    </div>
  );
}
