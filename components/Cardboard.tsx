"use client";
  
import Card from "./Card";
import Image from "next/image";
import { PokemonGridDisplay } from "../interfaces/Pokemon";

export default function Cardboard( {pokemons} : {pokemons : PokemonGridDisplay[]}) {


  return (
  
    <div className=" w-[80%] h-[75%] m-auto border p-10 align-middle border-white bg-white/10 rounded-lg shadow-md ">
    <div className=" h-full w-full overflow-scroll pt-2 justify-center">
    <div className="grid grid-cols-5 gap-4 justify-items-center"> 
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
      </div>
      </div>
      <Image
                src="/arrow-down.png"
                alt="Pokemon Logo"
                width={30}
                height={30}
                className="mx-auto mt-4 animate-bounce hover: cursor-pointer scale-110 transition-all duration-300"
              />
              </div>
  );
}
