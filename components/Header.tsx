'use client';

import Image from "next/image";
import Input from "./Input";
import { useSearch } from "../context/SearchContext"

export default function Header() {

const { search, setSearch } = useSearch();


  return (
    <header className="flex flex-row h-[15%] justify-around items-center backdrop-blur-md mt-8 mb-8">
        <Image
          src="/logo.png"
          alt="Pokemon Logo"
          priority={false}
          width={250}
          height={250}
        />
      <div className="text-center">
        <p className="m-0">
          PICK A POKÉMON FROM THE ADVENTURES <strong>RED, GREEN,</strong>
        </p>
        <p className="m-0">
          <strong>BLUE & YELLOW</strong> TO SEE ITS INFO.
        </p>
      </div>
      <Input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Find Pokémon..."
        />
    </header>
  );
}
