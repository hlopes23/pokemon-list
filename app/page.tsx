import Cardboard from "../components/Cardboard";
import getPokemons from "../utils/pokemon-data";

export default async function Home() {

  const pokemons = await getPokemons(); 
  console.log(pokemons);

  return (
    
    <Cardboard pokemons={pokemons}/>
    
  );
}
