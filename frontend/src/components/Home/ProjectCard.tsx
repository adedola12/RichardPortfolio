import React from "react";
import type { Project } from "./types";

type Props = {
  project: Project;
  onExpand?: (project: Project) => void;
  /** keeps lime glow on (like the first card in your screenshot) */
  selected?: boolean;
};

export default function ProjectCard({ project, onExpand, selected }: Props) {
  return (
    <article
      className={[
        "group relative shrink-0",
        // (outer shape)
        "rounded-2xl border bg-neutral-900/40",
        "border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        "overflow-hidden transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        // hover lime glow
        "hover:shadow-[0_0_0_1px_rgba(163,230,53,0.6),0_0_36px_rgba(132,204,22,0.35)] hover:border-lime-500/60",
        // persistent lime glow when selected
        selected
          ? "shadow-[0_0_0_1px_rgba(163,230,53,0.6),0_0_36px_rgba(132,204,22,0.35)] border-lime-500/60"
          : "",
      ].join(" ")}
    >
      {/* top wash for legibility */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-black/55 to-transparent" />

      {/* title + expand */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4">
        <div className="space-y-1">
          <h3 className="text-[15px] font-semibold text-white">
            {project.title}
          </h3>
          <p className="text-xs text-white/75">{project.subtitle}</p>
        </div>

        <button
          type="button"
          aria-label="Expand"
          onClick={() => onExpand?.(project)}
          className="grid h-8 w-8 place-items-center rounded-md border border-white/25 bg-black/40 text-white/85 transition hover:text-white hover:bg-black/60"
        >
          {/* diagonal-arrows icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>
      </div>

      {/* inner frame = more rectangular feel */}
      <div className="relative z-0 px-3 pb-4 pt-12 sm:px-4 sm:pb-5 sm:pt-14">
        <div className="rounded-xl border border-white/10 bg-black/40 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={`${project.title} – ${project.subtitle}`}
              className="
                w-full object-cover
                h-[220px] sm:h-[260px] lg:h-[300px]
                transition-transform duration-500 ease-out group-hover:scale-[1.01]
              "
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* subtle ring on hover/selected */}
      <div
        className={[
          "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent",
          "group-hover:ring-lime-500/50",
          selected ? "ring-lime-500/50" : "",
        ].join(" ")}
      />
    </article>
  );
}
