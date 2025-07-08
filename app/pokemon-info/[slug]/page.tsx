import { getPokemonByName } from "../../../utils/pokemon-data";
import PokemonInfo from "../../../components/PokemonInfo";

export default async function PokemonInfoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<React.ReactNode> {

  const fetchedPokemon = await getPokemonByName((await params).slug);

  return (
    <PokemonInfo pokemon={fetchedPokemon}/>
  );

}

