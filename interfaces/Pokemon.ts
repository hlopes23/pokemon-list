export interface Pokemon {
    
    name: string
    type: string
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
    height: number
    weight: number
    ability: string 
    hiddenAbility: string
    image: string
}

export interface PokemonGridDisplay {
    name: string
    url: string
    id: number
    image: string
}

export type PokemonSpecies = {
    name: string
    url: string
}