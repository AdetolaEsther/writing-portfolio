import Image from "next/image";

const interests = [
  "Fiction and storytelling",
  "Personal essays and nonfiction",
  "Editing and editorial work",
  "Technical writing",
];

export default function About() {
  return (
    <section
      id="about-author"
      className="scroll-mt-14 border-t-[3px] border-[#141414]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex items-center justify-between gap-3">
          <span className="editorial-label text-[#ab3500]">
            Section C — Bio &amp; masthead note
          </span>
          <span className="editorial-label text-[#5b5750]">A.E.A.</span>
        </div>

        <h2 className="display-serif mt-3 text-[clamp(2rem,5vw,3.25rem)] font-black leading-none tracking-tight">
          About the author
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-0">
          
<aside className="lg:col-span-4 lg:pr-10">
  <div className="border-4 border-double border-[#141414] p-6 text-center">
    <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-[#141414]">
      <Image
        src="/me1.PNG"
        alt="Adetola Esther Aderibigbe"
        fill
        priority
        sizes="160px"
        className="object-cover"
      />
    </div>

    <p className="editorial-label mt-5">
      Adetola Esther Aderibigbe
    </p>

    <p className="display-serif mt-1 text-lg italic text-[#5b5750]">
      Writer and Software Engineer
    </p>
  </div>
</aside>


          <div className="lg:col-span-8 lg:border-l lg:border-black/20 lg:pl-10">
            <div className="columns-ruled text-[1.0625rem] leading-8 text-[#2b2825]">
              <p className="drop-cap">
                I&apos;ve always been drawn to putting things into words.
                I write fiction, personal essays, nonfiction, and
                technical pieces, following my curiosity wherever it
                leads. Sometimes that means telling a story; other
                times, it means working through an idea until it makes
                sense.
              </p>

              <p>
                I&apos;m interested in the process as much as the
                finished piece: finding the right words, revisiting a
                story from another angle, editing for clarity, and
                documenting what I learn. This space brings those
                interests together, from explorations of the human
                experience to the things I discover as a software
                engineer.
              </p>
            </div>

            <div className="mt-10 border-t border-[#141414] pt-4">
              <span className="editorial-label text-[#ab3500]">
                Areas of interest
              </span>

              <ul className="mt-2 grid sm:grid-cols-2 sm:gap-x-10">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-3 border-b border-dotted border-black/40 py-3"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 bg-[#ff6b35]"
                    />
                    <span className="display-serif text-lg font-semibold">
                      {interest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
