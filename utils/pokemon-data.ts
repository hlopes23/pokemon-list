import { PokemonSpecies } from "../interfaces/Pokemon";
import { PokemonGridDisplay } from "../interfaces/Pokemon";
import { Pokemon } from "../interfaces/Pokemon";
import { dataToPokemon } from "../mappers/dataToPokemon";

function getPokemonIdFromUrl(url: string): number {
  const id = url.split("/").filter(Boolean).pop();
  return id ? parseInt(id) : 0;
}

export default async function getPokemons(): Promise<PokemonGridDisplay[]> {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/generation/1/");
    if (!response.ok)
      throw new Error("Error fetching pokemons. Status: " + response.status);
    const data = await response.json();
    return data.pokemon_species.map((pokemon: PokemonSpecies) => ({
      ...pokemon,
      id: getPokemonIdFromUrl(pokemon.url),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getPokemonIdFromUrl(
        pokemon.url
      )}.svg`,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPokemonByName(name: string): Promise<Pokemon>{
  try {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok)
      throw new Error("Error fetching data for `${name}`. Status: " + response.status);
    const data = await response.json();
    return dataToPokemon(data);

  } catch (error) {
    console.error(error);
    throw error;
  } 

}