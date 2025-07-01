
import PokemonInfo from "../components/PokemonInfo";
import getPokemons from "../utils/pokemon-data";
import Image from "next/image";

import { getPokemonByName } from "../utils/pokemon-data";

export default async function Home() {

  const pokemons = await getPokemons(); 
  console.log(pokemons);

  const pokemon = await getPokemonByName("pikachu");
  console.log(pokemon);

  return (
  <PokemonInfo/>
  );

}
