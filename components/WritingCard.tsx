import { ArrowUpRight, BookOpen, Code2, PenLine } from "lucide-react";
import type { Writing } from "@/data/writings";

type WritingCardProps = {
  writing: Writing;
  index: number;
  variant?: "lead" | "standard";
};

export default function WritingCard({
  writing,
  index,
  variant = "standard",
}: WritingCardProps) {
  const isLead = variant === "lead";
  const isTechnical = writing.category === "technical";
  const isPublished = writing.category === "published";

  const Icon = isTechnical ? Code2 : isPublished ? BookOpen : PenLine;
  const kickerColor = isTechnical ? "text-[#244bff]" : "text-[#ab3500]";

  const content = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span
          className={`editorial-label flex items-center gap-2 ${kickerColor}`}
        >
          <Icon size={13} aria-hidden="true" />
          {writing.label}
        </span>

        <span className="editorial-label shrink-0 text-[#5b5750]">
          No. {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3
        className={`display-serif tracking-tight decoration-[#ff6b35] decoration-2 underline-offset-4 group-hover:underline ${
          isLead
            ? "text-balance text-[clamp(1.9rem,4.4vw,3.25rem)] font-black leading-[1.02]"
            : "text-[1.6rem] font-bold leading-[1.1]"
        }`}
      >
        {writing.title}
      </h3>

      <p
        className={`text-[#3a3631] ${
          isLead ? "max-w-2xl text-lg leading-8" : "text-[15px] leading-7"
        }`}
      >
        {writing.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        <span className="editorial-label text-[#5b5750]">
          {writing.readTime ?? "Writing"}
          {writing.publication ? ` · ${writing.publication}` : ""}
        </span>

        <span className="editorial-label flex shrink-0 items-center gap-1">
          Read piece <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </div>
    </>
  );

  const innerClass =
    "flex h-full flex-col gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244bff]";

  return (
    <article className={`group ${isLead ? "pb-2 pt-8" : ""}`}>
      {writing.href ? (
        <a
          href={writing.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Read ${writing.title}`}
          className={innerClass}
        >
          {content}
        </a>
      ) : (
        <div className={innerClass}>{content}</div>
      )}
    </article>
  );
}