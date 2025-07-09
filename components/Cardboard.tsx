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
  
    <div className=" w-[80%] lg:w-[80%] h-[45dvh] lg:h-[75%] mt-15 lg:mt-0 m-auto border p-10 align-middle border-white bg-white/10 rounded-lg shadow-md">
    <div className=" h-full w-full overflow-scroll pt-6 justify-center">
    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 gap-y-12"> 
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