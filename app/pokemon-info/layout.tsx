import { Geist_Mono } from "next/font/google";
import "../globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PokemonInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${geistMono.className} antialiased`}>{children}</div>
        
}
