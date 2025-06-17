import { Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
