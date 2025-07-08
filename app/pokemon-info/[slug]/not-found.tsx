import Link from "next/link"
import Image from "next/image";

export default function PokemonNotFound() {

  return (
  <div className="flex flex-col h-[80%] items-center justify-center bg-transparent">
      <Image
        src="/psyduck-Background-Removed.png"
        alt="Psyduck"
        priority={true}
        width={350}
        height={200}
        className="mb-6"
      />
        <h1 className="text-4xl text-red-700 font-bold mb-4">404 - Pokemon Not Found</h1>
        <p className="text-lg mb-6">The Pokemon you are looking for does not exist.</p>
        <Link href="/" className="text-black-500  hover:underline">
            Go back to Cardboard
        </Link>
        </div>
  );
}