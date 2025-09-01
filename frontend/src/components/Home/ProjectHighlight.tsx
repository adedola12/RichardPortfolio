import React, { useMemo, useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { CATEGORIES, type Category, type Project } from "./types";

/* demo data – swap with real screenshots */
const PLACEHOLDER = (seed: number) =>
  `https://picsum.photos/seed/p${seed}/1200/800`;

const SAMPLE_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Work Sample",
    subtitle: "Website",
    category: "Featured Projects",
    image: PLACEHOLDER(101),
  },
  {
    id: "p2",
    title: "Work Sample",
    subtitle: "Product UI/UX Designs",
    category: "Product UI/UX Designs",
    image: PLACEHOLDER(102),
  },
  {
    id: "p3",
    title: "Work Sample",
    subtitle: "Website",
    category: "Websites",
    image: PLACEHOLDER(103),
  },
  {
    id: "p4",
    title: "Work Sample",
    subtitle: "Website",
    category: "Websites",
    image: PLACEHOLDER(104),
  },
  {
    id: "p5",
    title: "Work Sample",
    subtitle: "Publication",
    category: "Publication",
    image: PLACEHOLDER(105),
  },
  {
    id: "p6",
    title: "Work Sample",
    subtitle: "Marketing",
    category: "Marketing Designs",
    image: PLACEHOLDER(106),
  },
  {
    id: "p7",
    title: "Work Sample",
    subtitle: "Event Branding",
    category: "Event Branding",
    image: PLACEHOLDER(107),
  },
  {
    id: "p8",
    title: "Work Sample",
    subtitle: "Presentation",
    category: "Presentation",
    image: PLACEHOLDER(108),
  },
];

/** gap between cards (px) – keep in sync with `gap-*` class on the rail */
const GAP = 24; // tailwind `gap-6`

/** how many cards we *aim* to show at once on wide screens */
const VISIBLE_XL = 5;
const VISIBLE_LG = 4;
const VISIBLE_MD = 2;
const VISIBLE_SM = 1;

/** clone count on each side to enable infinite loop */
const CLONES = 3;

function useVisibleCount() {
  const [n, setN] = useState(VISIBLE_XL);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setN(VISIBLE_SM);
      else if (w < 768) setN(VISIBLE_MD);
      else if (w < 1024) setN(VISIBLE_LG);
      else setN(VISIBLE_XL);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return n;
}

export default function ProjectHighlight() {
  const [active, setActive] = useState<Category>("Featured Projects");
  const visible = useVisibleCount();
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(CLONES); // start after left clones
  const [anim, setAnim] = useState(true);

  // filtered list
  const base = useMemo(() => {
    if (active === "Featured Projects") return SAMPLE_PROJECTS;
    return SAMPLE_PROJECTS.filter((p) => p.category === active);
  }, [active]);

  // build looped array with clones at both ends
  const looped = useMemo(() => {
    const left = base.slice(-CLONES);
    const right = base.slice(0, CLONES);
    return [...left, ...base, ...right];
  }, [base]);

  // compute card width so ~N cards fit; we add some inner padding on the viewport
  // to create the "half-visible" first/last edge feel.
  const cardWidth = `calc((100% - ${GAP * (visible - 1)}px) / ${visible})`;

  // keep index inside bounds when user changes category
  useEffect(() => {
    setAnim(false);
    setIndex(CLONES);
    const id = setTimeout(() => setAnim(true), 20);
    return () => clearTimeout(id);
  }, [looped]);

  // move next/prev
  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  // when animation ends at clones, jump to real slide (no animation) → infinite feel
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const handle = () => {
      const total = looped.length;
      if (index >= total - CLONES) {
        setAnim(false);
        setIndex(CLONES);
        requestAnimationFrame(() => setAnim(true));
      } else if (index < CLONES) {
        setAnim(false);
        setIndex(total - CLONES - 1);
        requestAnimationFrame(() => setAnim(true));
      }
    };
    el.addEventListener("transitionend", handle);
    return () => el.removeEventListener("transitionend", handle);
  }, [index, looped.length]);

  const translate = `translateX(calc(-${index} * (${cardWidth} + ${GAP}px)))`;

  const handleExpand = (_p: Project) => {
    // hook modal/lightbox here if needed
  };

  return (
    <section className="relative mx-auto max-w-[1280px] px-4 py-16">
      {/* title */}
      <h2
        className="mb-8 text-center text-4xl sm:text-5xl md:text-6xl text-white"
        style={{ fontFamily: "Zialothus, 'Great Vibes', cursive" }}
      >
        Project Highlights
      </h2>

      {/* filter pills */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={[
                "rounded-full px-4 py-2 text-sm transition",
                "border shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
                isActive
                  ? "border-white/60 bg-white/10 text-white"
                  : "border-white/25 text-white/80 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* carousel with edge-padding (gives half-visible first/last) */}
      <div className="relative">
        {/* arrows */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="
            absolute left-0 top-1/2 z-20 -translate-y-1/2
            hidden md:grid place-items-center
            h-10 w-10 rounded-full
            bg-black/50 text-white/80 border border-white/15
            hover:text-white hover:bg-black/70
          "
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="overflow-hidden px-6 md:px-8">
          {/* rail */}
          <div
            ref={railRef}
            className="flex gap-6 will-change-transform"
            style={{
              transform: translate,
              transition: anim
                ? "transform 450ms cubic-bezier(.2,.8,.2,1)"
                : "none",
            }}
          >
            {looped.map((p, i) => (
              <div
                key={`${p.id}-${i}`}
                className="snap-start"
                style={{ width: cardWidth, minWidth: cardWidth }}
              >
                <ProjectCard
                  project={p}
                  onExpand={handleExpand}
                  selected={i === CLONES} // keep first real card glowing
                />
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Next"
          onClick={next}
          className="
            absolute right-0 top-1/2 z-20 -translate-y-1/2
            hidden md:grid place-items-center
            h-10 w-10 rounded-full
            bg-black/50 text-white/80 border border-white/15
            hover:text-white hover:bg-black/70
          "
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <NavLink
          to="/portfolio"
          className="
            rounded-full border border-white/25 bg-black/40 px-5 py-2 text-sm text-white/90
            shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
            hover:border-white/50 hover:bg-black/60 transition
          "
        >
          View Portfolio
        </NavLink>
      </div>
    </section>
  );
}
