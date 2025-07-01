import Cardboard from "../components/Cardboard";
import PokemonInfo from "../components/PokemonInfo";
import getPokemons from "../utils/pokemon-data";
import Image from "next/image";



export default async function Home() {

  const pokemons = await getPokemons(); 
  console.log(pokemons);

  return (
  <PokemonInfo/>
  );

}
