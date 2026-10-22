// src/app/fonts.ts
//
// Three families do the whole job:
//   Playfair Display  -> headlines (you already use it)
//   Source Serif 4    -> body copy
//   IBM Plex Mono     -> kickers, datelines, bylines
//
// If layout.tsx already loads Playfair, just add the other two and keep your
// existing variable name (--font-playfair).
//
// Then in layout.tsx:
//   import { fontVariables } from "./fonts";
//   <html lang="en" className={fontVariables}>

import { IBM_Plex_Mono, Playfair_Display, Source_Serif_4 } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = `${playfair.variable} ${sourceSerif.variable} ${plexMono.variable}`;