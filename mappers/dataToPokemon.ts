import { Pokemon } from "../interfaces/Pokemon";

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
