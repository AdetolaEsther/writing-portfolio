
"use client";

import { useState } from "react";
import { Menu, X, UserRound } from "lucide-react";

const links = [
  { label: "Selected writing", href: "#selected-writing" },
  { label: "Personal essays", href: "#personal-essays" },
  { label: "Technical writing", href: "#technical-writing" },
  { label: "About", href: "#about-author" },
  { label: "Elsewhere", href: "#elsewhere" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#fcf9f8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#home" aria-label="Go to homepage" className="flex flex-col gap-1">
            <span className="flex items-center gap-2 editorial-label text-[#101010]">
              <span className="h-2 w-2 bg-[#244bff]" />
              A. E. ADERIBIGBE
            </span>

            <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#66636a]">
              <span className="font-bold text-[#ff6b35]">VOL. 01</span>
              <span className="text-gray-400">/</span>
              Edition Feed
            </span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="#about-author"
              aria-label="About the author"
              className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#244bff] text-white sm:flex"
            >
              <UserRound size={17} />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center bg-[#244bff] text-white transition-colors hover:bg-[#1938d0]"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav
          aria-label="Main navigation"
          className="fixed inset-x-0 top-20 z-40 border-b border-black/10 bg-[#fcf9f8] px-5 py-5 shadow-lg"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-black/10 py-4 font-medium"
              >
                <span>{link.label}</span>
                <span className="editorial-label text-[#244bff]">
                  0{index + 1} /
                </span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
