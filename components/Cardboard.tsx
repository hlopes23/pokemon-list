"use client";
  
import { useSearch } from "../context/SearchContext";
import Card from "./Card";
import Image from "next/image";
import { PokemonGridDisplay } from "../interfaces/Pokemon";


export default function Cardboard( {pokemons} : {pokemons : PokemonGridDisplay[]}) {
  const { search } = useSearch();


  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  
    <div className=" w-[80%] h-[75%] m-auto border p-10 align-middle border-white bg-white/10 rounded-lg shadow-md ">
    <div className=" h-full w-full overflow-scroll pt-2 justify-center">
    <div className="grid grid-cols-5 justify-items-center pt-2 align-items-middle gap-x-1 gap-y-12"> 
      {filteredPokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
      </div>
      </div>
      <Image
                src="/arrow-down.png"
                alt="arro down logo"
                width={30}
                height={30}
                className="mx-auto mt-4 animate-bounce transition-all duration-300"
              />
              </div>
  );
}
