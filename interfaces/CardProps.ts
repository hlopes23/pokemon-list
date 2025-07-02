import { ReactElement } from "react";
import { PokemonGridDisplay } from "../interfaces/Pokemon";

export interface CardProps {
  pokemon: PokemonGridDisplay;
  onClick: (pokemon:PokemonGridDisplay) => void;
}
