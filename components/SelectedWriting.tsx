"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Archive } from "lucide-react";
import { writings } from "@/data/writings";
import type { WritingFilter } from "@/data/writings";
import WritingFilters from "./WritingFilters";
import WritingCard from "./WritingCard";

export default function SelectedWriting() {
  const [activeFilter, setActiveFilter] = useState<WritingFilter>("all");

  const counts = useMemo(() => {
    return {
      all: writings.length,
      personal: writings.filter((item) => item.category === "personal").length,
      technical: writings.filter((item) => item.category === "technical").length,
      published: writings.filter((item) => item.category === "published").length,
    };
  }, []);

  const filteredWriting = useMemo(() => {
    if (activeFilter === "all") return writings;

    return writings.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // first piece runs as the lead story, the rest fill the column grid
  const [lead, ...rest] = filteredWriting;

  return (
    <section
      id="selected-writing"
      className="scroll-mt-14 border-t-[3px] border-[#141414]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="editorial-label flex items-center gap-2 text-[#ab3500]">
              <span aria-hidden="true" className="h-2 w-2 bg-[#ff6b35]" />
              Section B — The writing archive
            </span>

            <h2 className="display-serif text-[clamp(2rem,5vw,3.25rem)] font-black leading-none tracking-tight">
              Selected writing
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#5b5750] md:text-right">
            Essays, stories, and technical notes. A growing collection of things
            I have written and learned.
          </p>
        </header>

        <div className="mt-8">
          <WritingFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={counts}
          />
        </div>

        <div aria-live="polite">
          {lead && <WritingCard writing={lead} index={1} variant="lead" />}

          {rest.length > 0 && (
            <div className="story-grid mt-8">
              {rest.map((writing, i) => (
                <WritingCard key={writing.id} writing={writing} index={i + 2} />
              ))}
            </div>
          )}

          {filteredWriting.length === 0 && (
            <p className="mt-8 border border-dashed border-black/30 p-6 text-sm text-[#5b5750]">
              No writing in this category yet.
            </p>
          )}
        </div>

        <aside className="mt-12 flex flex-col gap-3 border-4 border-double border-[#141414] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="flex flex-col gap-3">
            <div className="editorial-label flex items-center gap-2 text-[#ab3500]">
              <Archive size={16} aria-hidden="true" />
              The archive
            </div>

            <p className="max-w-xl text-[15px] leading-7 text-[#3a3631]">
              More writing will find its way here. For now, explore the pieces
              listed above or visit my other work.
            </p>
          </div>

          <a
            href="#elsewhere"
            className="editorial-label inline-flex shrink-0 items-center gap-2 self-start text-[#141414] underline decoration-[#ff6b35] decoration-2 underline-offset-4 transition-colors hover:text-[#244bff] sm:self-center"
          >
            Find me elsewhere <ArrowRight size={15} />
          </a>
        </aside>
      </div>
    </section>
  );
}