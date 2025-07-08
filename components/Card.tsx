'use client';

import Image from "next/image";
import { useSearch } from "../context/SearchContext";
import { CardProps } from "../interfaces/CardProps";
import Link from "next/link";

export default function Card({ pokemon}: CardProps) {
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
    <Link className="bg-white/20 w-[80%] h-[250px] flex flex-col justify-between border cursor-pointer hover:scale-105 hover:bg-white/40 active:scale-95 border-white/30 rounded-lg shadow-lg p-4 transition-all duration-150 ease-in-out" href={`/pokemon-info/${pokemon.name}`}>
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={150}
          height={150}
          priority={false}
          className="mx-auto h-full max-h-[60%] object-contain"
        />
        <div className="text-lg p-4 text-center capitalize bg-white/20 rounded-md w-full mx-auto">
          <p>{highlightName(pokemon.name, search)}</p>
        </div>
    </Link>
  );
}
