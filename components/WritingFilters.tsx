import type { WritingFilter } from "@/data/writings";

type WritingFiltersProps = {
  activeFilter: WritingFilter;
  onFilterChange: (filter: WritingFilter) => void;
  counts: Record<WritingFilter, number>;
};

const filters: { label: string; value: WritingFilter }[] = [
  { label: "All", value: "all" },
  { label: "Personal essays", value: "personal" },
  { label: "Technical writing", value: "technical" },
  { label: "Published", value: "published" },
];

export default function WritingFilters({
  activeFilter,
  onFilterChange,
  counts,
}: WritingFiltersProps) {
  return (
    <div
      role="group"
      aria-label="Filter writing by category"
      className="-mx-4 overflow-x-auto border-y border-[#141414] sm:mx-0"
    >
      <div className="flex w-max min-w-full sm:w-full">
        {filters.map((filter) => {
          const active = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={active}
              onClick={() => onFilterChange(filter.value)}
              className={`editorial-label min-h-11 shrink-0 border-l border-black/20 px-4 py-3 text-left transition-colors first:border-l-0 sm:flex-1 sm:text-center ${
                active
                  ? "bg-[#141414] text-[#f4f0e8]"
                  : "text-[#3a3631] hover:bg-black/5"
              }`}
            >
              {filter.label}{" "}
              <span className={active ? "text-[#ff6b35]" : "text-[#ab3500]"}>
                {counts[filter.value]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}