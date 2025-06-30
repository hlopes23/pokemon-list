import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { SearchContextProvider } from "../context/SearchContext";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Pokemon List</title>
    </head>
      <body
        className={`${geistMono.className} antialiased`} >
      <SearchContextProvider>
        <Header />
        {children}
      </SearchContextProvider>
      </body>
    </html>
  );
}
