"use client";

type SlideDotsProps = {
  count: number;
  activeIndex: number;
  labels: string[];
  onSelect: (index: number) => void;
};

export function SlideDots({
  count,
  activeIndex,
  labels,
  onSelect
}: SlideDotsProps) {
  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:block lg:right-8">
      <div className="pointer-events-auto flex flex-col items-center gap-3 rounded-full border border-white/10 bg-panel/50 px-2 py-3 shadow-panel backdrop-blur-2xl">
        {Array.from({ length: count }).map((_, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={labels[index]}
              type="button"
              aria-label={`Go to ${labels[index]}`}
              onClick={() => onSelect(index)}
              className="group relative flex h-4 w-4 items-center justify-center"
            >
              <span
                className={`block rounded-full transition-all ${
                  isActive
                    ? "h-4 w-4 bg-primary shadow-[0_0_24px_rgba(16,176,160,0.55)]"
                    : "h-2.5 w-2.5 bg-white/35 group-hover:bg-white/60"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
