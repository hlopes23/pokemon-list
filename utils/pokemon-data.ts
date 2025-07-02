import { PokemonSpecies } from "../interfaces/Pokemon";
import { PokemonGridDisplay } from "../interfaces/Pokemon";
import { Pokemon } from "../interfaces/Pokemon";


function getPokemonIdFromUrl(url: string): number {
  const id = url.split("/").filter(Boolean).pop();
  return id ? parseInt(id) : 0;
}


export default async function getPokemons(): Promise<PokemonGridDisplay[]> {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/generation/1/");
    if (!response.ok)
      throw new Error(`Error fetching pokemons. Status: ${response.status}`);
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
      throw new Error(`Error fetching data for ${name}. Status: ${response.status}`);
    const data = await response.json();
    return dataToPokemon(data);

  } catch (error) {
    console.error(error);
    throw error;
  } 
}

export function dataToPokemon(data: any): Pokemon {
  return {
    name: data.name,
    type: data.types[0].type.name,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    specialAttack: data.stats[3].base_stat,
    specialDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
    ability: data.abilities[0].ability.name,
    hiddenAbility:
      data.abilities.length > 1 ? data.abilities[1].ability.name : "None",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
  };
}
