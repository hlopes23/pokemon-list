import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
