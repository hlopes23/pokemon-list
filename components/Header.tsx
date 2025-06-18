'use client';

import Image from "next/image";
import Input from "./Input";
import { useState } from "react";

export default function Header() {

const [pokemon, setPokemon] = useState<string>("");

   const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPokemon(e.target.value);
   }

  return (
    <header className="flex flex-row justify-around items-center backdrop-blur-md mt-8 mb-8">
        <Image
          src="/logo.png"
          alt="Pokemon Logo"
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
        value={pokemon}
        onChange={handleOnChange}
        placeholder="Find Pokémon..."
        />
    </header>
  );
}
