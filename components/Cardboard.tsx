"use client";
  
import { useSearch } from "../context/SearchContext";
import { useSelect } from "../context/SelectContext";
import Card from "./Card";
import Image from "next/image";
import { Pokemon, PokemonGridDisplay } from "../interfaces/Pokemon";
import { getPokemonByName } from "../utils/pokemon-data";


export default function Cardboard( {pokemons} : {pokemons : PokemonGridDisplay[]}) {
  const { search } = useSearch();
  const {setSelectedPokemon} = useSelect();

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = async (pokemon: PokemonGridDisplay) => {
    try {
      const fetchedPokemon = await getPokemonByName(pokemon.name);
      setSelectedPokemon(fetchedPokemon);
      console.log("Selected Pokémon:", fetchedPokemon);
    } catch (error) {
      console.error("Failed to fetch Pokémon details:", error);
    }
  };

  return (
  
    <div className=" w-[80%] h-[75%] m-auto border p-10 align-middle border-white bg-white/10 rounded-lg shadow-md ">
    <div className=" h-full w-full overflow-scroll pt-2 justify-center">
    <div className="grid grid-cols-5 gap-4 justify-items-center"> 
      {filteredPokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} onClick={() => handleClick(pokemon)} />
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
