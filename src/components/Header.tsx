import Image from 'next/image';

export default function Header() { 
    return ( 
        <header className = "flex flex-row justify-around items-center pl-4 pr-4 border-b-2 bg-white/5 backdrop-blur-md h-[20%] md: flex-col md: flex-wrap md:items-center md:gap-4">
            <div className = "flex flex-row items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="Pokemon Logo"
                    width={200}
                    height={200}
                    className="object-contain w-[100%] h-[100%] sm:w-10 sm:h-10"
                />
            </div>
            <div className = "text-2xl font-bold text-white text-center ">
            <p>PICK A POKÉMON FROM ADVENTURES <strong>RED, GREEN,</strong></p> 
            <p><strong>BLUE & YELLOW</strong> TO SEE ITS INFO.</p>
            </div>
            </header>
    );
}