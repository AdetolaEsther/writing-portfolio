"use client";

import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/AdetolaEsther",
    description: "Code and projects",
    icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aderibigbe-esther-2a6bb6207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    description: "Professional profile",
    icon: ExternalLink,
  },
  {
    label: "Engineering portfolio",
    href: "https://adetola-esther.vercel.app/",
    description: "My work in frontend engineering",
    icon: Code2,
  },
];
 
  
export default function Footer() {
   const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);
  return (
    <>
      <section
        id="elsewhere"
        className="scroll-mt-14 border-t-[3px] border-[#141414]"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-3">
            <span className="editorial-label text-[#ab3500]">
              Section D — Network &amp; connections
            </span>

            <h2 className="display-serif text-[clamp(1.9rem,4.6vw,3rem)] font-black leading-none tracking-tight">
              Elsewhere on the internet
            </h2>
          </div>

          <ul className="mt-8 grid border-y border-[#141414] md:grid-cols-3">
            {links.map(({ label, href, description, icon: Icon }, index) => (
              <li
                key={label}
                className="border-b border-black/20 last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full min-h-32 flex-col justify-between gap-6 p-5 transition-colors hover:bg-black/[0.04] md:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="editorial-label text-[#ab3500]">
                      0{index + 1} /
                    </span>
                    <Icon
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-[#244bff]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="display-serif text-2xl font-bold leading-tight decoration-[#ff6b35] decoration-2 underline-offset-4 group-hover:underline">
                      {label}
                    </span>
                    <span className="text-sm leading-6 text-[#5b5750]">
                      {description}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-[#141414] text-[#f4f0e8]">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px flex-1 bg-white/25" />
            <span className="editorial-label text-[#ff6b35]">
              End of this edition
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-white/25" />
          </div>

          <p className="display-serif mt-10 text-center text-[clamp(2rem,6vw,4rem)] font-black leading-[1.05] tracking-tight">
            Adetola Esther Aderibigbe
          </p>

          <p className="display-serif mx-auto mt-4 max-w-md text-center text-lg italic leading-7 text-white/75">
            Stories, ideas, and things worth understanding.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-4 text-white/60">
            <span className="editorial-label">Electric Editorial</span>
            <span className="editorial-label">
        © {year || " "} Adetola Esther Aderibigbe
            </span>
            <a
              href="#home"
              className="editorial-label inline-flex items-center gap-2 text-[#ff6b35]"
            >
              Back to top <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}