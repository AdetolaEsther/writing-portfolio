
"use client";

import { useEffect, useState } from "react";

export default function Masthead() {
  const [edition, setEdition] = useState("");

  useEffect(() => {
    setEdition(
      new Intl.DateTimeFormat("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Africa/Lagos",
      }).format(new Date())
    );
  }, []);

  return (
    <header className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between gap-3 border-b border-black/20 pb-2">
        <span className="editorial-label text-[#5b5750]">
          Vol. I · No. 1
        </span>

        <span className="editorial-label hidden text-[#5b5750] sm:block">
          Personal writing portfolio
        </span>

        <span className="editorial-label text-[#5b5750]">
          Lagos, Nigeria
        </span>
      </div>

      <div className="py-6 text-center sm:py-9">
        <p className="editorial-label mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[#ff6b35]">
          Who is
        </p>

        <h1 className="display-serif text-balance text-[clamp(2.1rem,6.4vw,4.6rem)] font-black leading-[0.95] tracking-[-0.035em]">
          Adetola Esther Aderibigbe
        </h1>

        <p className="editorial-label mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[#3a3631]">
          <span
            aria-hidden="true"
            className="h-2 w-2 animate-pulse rounded-full bg-[#ff6b35]"
          />
          Essays <span className="text-[#ff6b35]">•</span> Stories{" "}
          <span className="text-[#ff6b35]">•</span> Technical writing
        </p>
      </div>

      <div className="rule-double" />

      <div className="flex items-center justify-between gap-3 py-2">
        <span className="editorial-label">
          {edition || "\u00A0"}
        </span>

        <span className="editorial-label text-[#5b5750]">
          Free to read
        </span>
      </div>
    </header>
  );
}
