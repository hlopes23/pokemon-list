'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import { Pokemon } from "../interfaces/Pokemon";

interface SelectContextProps {
  selectedPokemon: Pokemon | null;
  setSelectedPokemon: (value: Pokemon | null) => void;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

export function SelectContextProvider({ children }: { children: ReactNode }) {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  return (
    <SelectContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </SelectContext.Provider>
  );
}

export function useSelect() {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error("useSelect must be used within a SelectContextProvider");
  }
  return context;
}