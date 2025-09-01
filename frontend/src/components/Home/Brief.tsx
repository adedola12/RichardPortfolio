import React, { useMemo, useState } from "react";
import { assets } from "../../assets/assets";
import {
  FaDownload,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

type CardData = { src: string; name: string; role: string };

function CardStack() {
  const cards: CardData[] = useMemo(
    () => [
      { src: assets.ownImg, name: "Samson Faboyo", role: "Design Lead" },
      { src: assets.ownImg1, name: "Samson Agbeke", role: "Design Manager" },
      { src: assets.ownImg2, name: "Adebayo Faboyo", role: "Design Ideator" },
    ],
    []
  );

  // 0 = front, 1 = middle, 2 = back. We rotate this to cycle images.
  const [order, setOrder] = useState<number[]>([0, 1, 2]);
  const rotate = (step = 1) =>
    setOrder((prev) => {
      const a = [...prev];
      step > 0 ? a.unshift(a.pop()!) : a.push(a.shift()!);
      return a;
    });

  // Visual slot settings (front/middle/back) — positions/angles only.
  const posStyles = (slot: 0 | 1 | 2) => {
    if (slot === 0)
      return {
        cls: "z-30 scale-100 rotate-0 left-1/2 -translate-x-1/2 top-0",
        fx: "",
      };
    if (slot === 1)
      return {
        cls: "z-20 scale-[0.95] -rotate-[5.5deg] left-[41%] -translate-x-1/2 top-6",
        fx: "grayscale-[55%] brightness-90",
      };
    return {
      cls: "z-10 scale-[0.92] rotate-[6deg] left-[59%] -translate-x-1/2 top-8",
      fx: "grayscale-[55%] brightness-90",
    };
  };

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] md:max-w-[420px]">
      {/* Stage height (prevents layout jump) */}
      <div className="h-[360px] sm:h-[400px] md:h-[440px]" />

      {order.map((cardIndex, slot) => {
        const { src, name, role } = cards[cardIndex];
        const { cls, fx } = posStyles(slot as 0 | 1 | 2);
        const clickable = slot !== 0;

        return (
          <figure
            key={`${cardIndex}-${slot}`}
            className={`absolute ${cls} transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]
                        w-[250px] h-[340px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[430px]
                        rounded-2xl overflow-hidden cursor-${
                          clickable ? "pointer" : "default"
                        } bg-black/50`}
            style={{
              // NEON LIME OUTLINE + GLOW
              boxShadow: `
                inset 0 0 0 2px rgba(132,255,0,.95),
                0 0 28px rgba(132,255,0,.45),
                0 0 60px rgba(132,255,0,.28)
              `,
            }}
            onClick={() => clickable && rotate(1)}
          >
            <img
              src={src}
              alt={name}
              className={`h-full w-full object-cover ${fx}`}
            />
            {/* Edge fade so black melts into the background */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                WebkitMaskImage:
                  "radial-gradient(92% 88% at 50% 55%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 96%)",
                maskImage:
                  "radial-gradient(92% 88% at 50% 55%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 96%)",
              }}
            />
            {/* Label */}
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-3 sm:p-4 text-center text-[11px] sm:text-xs text-gray-200">
              <div className="font-semibold">{name}</div>
              <div className="opacity-80">{role}</div>
            </figcaption>
          </figure>
        );
      })}

      {/* Take a detour — FILLED LIME with black text */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => rotate(1)}
          className="rounded-full bg-lime-400 px-6 py-2 text-sm font-semibold text-black
                     shadow-[0_0_20px_rgba(132,255,0,.45)]
                     transition-all hover:shadow-[0_0_35px_rgba(132,255,0,.55)] hover:-translate-y-0.5 active:translate-y-0"
        >
          Take a quick detour!
        </button>
      </div>
    </div>
  );
}

export default function Brief() {
  return (
    <section className="relative overflow-hidden">
      {/* soft green wash behind section */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(75% 60% at 50% 45%, rgba(16,185,129,0.12), rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        {/* Title */}
        <div className="mb-12 text-center">
          <h3 className="text-xs sm:text-sm tracking-[0.18em] text-white/80 uppercase">
            How about a brief
          </h3>
          <p
            className="mt-2 text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ fontFamily: "Zialothus, 'Great Vibes', cursive" }}
          >
            brief introduction
          </p>
        </div>

        {/* 12-col layout to mirror your mock */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* LEFT TEXT */}
          <div className="lg:col-span-4">
            <div className="mx-auto max-w-[26rem] text-center text-[13px] sm:text-sm leading-relaxed text-gray-200 space-y-6">
              <p>
                Design, for me, is simply giving life to the many ideas
                constantly buzzing in my head. I love to draw, play with colors,
                and explore the endless possibilities that come from starting
                with a blank canvas.
              </p>
              <p>
                I’m a multidisciplinary designer, and I’ve been on this roller
                coaster for about 6 years now. My style has always been “Well, I
                think I can, so let’s try,” and that mindset has helped me pick
                up skills across different design niches.
              </p>
              <p>
                Over the years, I’ve had the chance to bring brands to life,
                collaborate with national organizations both locally and
                internationally, and just enjoy the process of creating.
              </p>
            </div>
          </div>

          {/* MIDDLE — interactive stack */}
          <div className="lg:col-span-4 flex justify-center">
            <CardStack />
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4">
            <div
              className="rounded-xl p-4 sm:p-5 md:p-6 bg-black/30 backdrop-blur-[1px]"
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,.12), 0 0 24px rgba(0,0,0,.35)",
              }}
            >
              <div className="text-[13px] sm:text-sm leading-relaxed text-gray-200 space-y-4">
                <p>
                  I’ve also worked across different teams, building my soft
                  skills and doing my best to make sure my designs solve real
                  problems—because at the end of the day, isn’t that what design
                  is all about?
                </p>
                <p>
                  And since I find the construction industry super fascinating
                  (I studied Quantity Surveying, by the way), I like to think
                  I’m discovering my purpose in connecting design and
                  construction…
                </p>
                <p>or maybe it’s the other way around.</p>
              </div>

              {/* Actions */}
              <div className="mt-20 flex items-center gap-3">
                {/* OUTLINED LIME resume button (icon + text lime) */}
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full border border-lime-400 px-4 py-2 text-xs font-medium text-lime-400
                             shadow-[0_0_20px_rgba(132,255,0,.25)]
                             transition-all hover:bg-lime-400 hover:text-black hover:shadow-[0_0_30px_rgba(132,255,0,.45)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FaDownload className="text-lime-400 transition-colors group-hover:text-black" />
                  Download Resume
                </a>

                {/* socials */}
                <div className="ml-auto flex items-center gap-2">
                  {[FaLinkedinIn, FaFacebookF, FaTwitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="social"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/40 text-white/80
                                 transition-all hover:text-black hover:bg-lime-400 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-lime-400/70"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
