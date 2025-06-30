'use client';

import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export function SearchContextProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState<string>("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );

}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchContextProvider");
  }
  return context;
}
