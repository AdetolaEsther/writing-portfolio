import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./font";

export const metadata: Metadata = {
  title: "Adetola Esther Aderibigbe | Writer",
  description:
    "Personal essays, stories, and technical writing by Adetola Esther Aderibigbe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}