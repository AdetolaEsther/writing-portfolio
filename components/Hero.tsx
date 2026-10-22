import { ArrowDown, ArrowUpRight } from "lucide-react";

const contents = [
  { no: "01", label: "Essays & stories", href: "#selected-writing" },
  { no: "02", label: "Technical writing", href: "#selected-writing" },
  { no: "03", label: "Learning in public", href: "#about-author" },
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-14">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12">
        <div className="mb-8 flex items-center justify-between gap-3">
          <span className="editorial-label text-[#ab3500]">
            Section A — Front page
          </span>
          <span className="editorial-label text-[#5b5750]">
            Index // 001 
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
          <article className="lg:col-span-8 lg:pr-10">
            <h2 className="display-serif text-balance text-[clamp(2.5rem,6.2vw,4.9rem)] font-black leading-[0.98] tracking-[-0.03em]">
              Stories, ideas, and things worth understanding and sharing.
            </h2>

            <p className="display-serif mt-6 max-w-2xl text-xl italic leading-8 text-[#3a3631] sm:text-2xl sm:leading-9">
              I write across genres, from fiction and personal essays to nonfiction and technical writing. I love telling and retelling stories, exploring ideas, and putting things into words to make sense of them. Whether I'm writing, editing, or documenting something I've learned, I'm drawn to the process of making things clearer and easier to understand.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-black/20 py-3">
              <span className="editorial-label">
                By Adetola Esther Aderibigbe
              </span>
              <span aria-hidden="true" className="text-[#ff6b35]">
                •
              </span>
              <span className="editorial-label text-[#5b5750]">
                Writer&apos;s desk
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#selected-writing"
                className="editorial-label inline-flex min-h-12 items-center gap-2 bg-[#141414] px-5 py-3 text-[#f4f0e8] transition-colors hover:bg-[#244bff]"
              >
                Continue to the writing <ArrowDown size={15} />
              </a>

              <a
                href="#about-author"
                className="editorial-label inline-flex min-h-12 items-center gap-1 underline decoration-[#ff6b35] decoration-2 underline-offset-4 transition-colors hover:text-[#244bff]"
              >
                Read the author&apos;s note <ArrowUpRight size={14} />
              </a>
            </div>
          </article>

          <aside
            aria-label="In this edition"
            className="lg:col-span-4 lg:border-l lg:border-black/20 lg:pl-10"
          >
            <div className="border-t-[3px] border-[#141414] pt-3">
              <h3 className="editorial-label text-[#ab3500]">In this edition</h3>

              <ol className="mt-2">
                {contents.map(({ no, label, href }) => (
                  <li
                    key={no}
                    className="border-b border-black/20 last:border-b-0"
                  >
                    <a
                      href={href}
                      className="group flex min-h-14 items-center gap-4 py-4"
                    >
                      <span className="editorial-label text-[#ab3500]">
                        {no}
                      </span>
                      <span className="display-serif flex-1 text-xl font-bold leading-tight decoration-[#ff6b35] decoration-2 underline-offset-4 group-hover:underline">
                        {label}
                      </span>
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="mt-10 border-y-[3px] border-[#141414] py-6">
              <span
                aria-hidden="true"
                className="display-serif block text-6xl leading-none text-[#ff6b35]"
              >
                “
              </span>
              <blockquote className="display-serif -mt-2 text-[1.65rem] font-semibold italic leading-9">
                A space for stories, ideas, and the occasional deep dive into
                how things work.
              </blockquote>
              <figcaption className="editorial-label mt-4 text-[#5b5750]">
                Notes from my writing desk
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}