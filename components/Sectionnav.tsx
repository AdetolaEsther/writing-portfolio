const sections = [
  { label: "Front page", href: "#home" },
  { label: "Writing", href: "#selected-writing" },
  { label: "About", href: "#about-author" },
  { label: "Elsewhere", href: "#elsewhere" },
];

export default function SectionNav() {
  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-40 bg-[#f4f0e8]/90 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="flex overflow-x-auto border-y border-[#141414] sm:justify-center">
          {sections.map(({ label, href }) => (
            <li
              key={href}
              className="shrink-0 border-l border-black/20 first:border-l-0"
            >
              <a
                href={href}
                className="editorial-label flex min-h-11 items-center px-4 transition-colors hover:text-[#244bff] sm:px-6"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}