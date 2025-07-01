import Cardboard from "../components/Cardboard";
import getPokemons from "../utils/pokemon-data";
import Image from "next/image";



export default async function Home() {

  const pokemons = await getPokemons(); 
  console.log(pokemons);

  return (
  <Cardboard pokemons={pokemons}/>
  );

}
