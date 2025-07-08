import getPokemons from "../utils/pokemon-data";
import Cardboard from "../components/Cardboard";

export default async function Home() {

  const pokemons = await getPokemons(); 

  return (
  <Cardboard pokemons={pokemons}/>
  );

}
