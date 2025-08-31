import React, { useMemo, useState } from "react";
import { assets } from "../../assets/assets";
import {
  FaDownload,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

type CardData = {
  src: string;
  name: string;
  role: string;
};

function CardStack() {
  // Use one image 3x for now (swap with real images if you have them)
  const cards: CardData[] = useMemo(
    () => [
      { src: assets.ownImg, name: "Samson Faboyo", role: "Design Lead" },
      { src: assets.ownImg1, name: "Samson Agbeke", role: "Design Manager" },
      { src: assets.ownImg2, name: "Adebayo Faboyo", role: "Design Idea" },
    ],
    []
  );

  // 0 = front, 1 = middle, 2 = back; we rotate this array
  const [order, setOrder] = useState<number[]>([0, 1, 2]);

  // Rotate order to bring the last card to front (or pass a step -1/1)
  const rotate = (step = 1) => {
    setOrder((prev) => {
      const arr = [...prev];
      if (step > 0) arr.unshift(arr.pop()!);
      else arr.push(arr.shift()!);
      return arr;
    });
  };

  // Helper that returns transform/z for each logical position
  const posStyles = (pos: number) => {
    // pos: 0=front,1=middle,2=back
    switch (pos) {
      case 0:
        return {
          className: "z-30 scale-100 rotate-0 left-1/2 -translate-x-1/2 top-0",
          shadow:
            "inset 0 0 0 2px rgba(132,204,22,0.85), 0 0 40px rgba(132,204,22,0.35)",
        };
      case 1:
        return {
          className:
            "z-20 scale-[0.95] -rotate-3 left-[58%] -translate-x-1/2 top-4",
          shadow:
            "inset 0 0 0 2px rgba(132,204,22,0.6), 0 0 30px rgba(132,204,22,0.25)",
        };
      default:
        return {
          className:
            "z-10 scale-[0.9] rotate-6 left-[42%] -translate-x-1/2 top-8",
          shadow:
            "inset 0 0 0 2px rgba(132,204,22,0.45), 0 0 24px rgba(132,204,22,0.20)",
        };
    }
  };

  return (
    <div
      className="relative mx-auto w-full
                    max-w-[360px] sm:max-w-[400px] md:max-w-[420px]
                    h-[420px] sm:h-[440px] md:h-[460px]"
    >
      {order.map((cardIndex, stackIndex) => {
        const { src, name, role } = cards[cardIndex];
        // Where this card should appear (front/middle/back)
        const { className, shadow } = posStyles(stackIndex);

        // Click only works on the non-front cards to bring them to front
        const isFront = stackIndex === 0;
        const clickable = !isFront;

        return (
          <figure
            key={`${cardIndex}-${stackIndex}`}
            className={`
              absolute rounded-2xl overflow-hidden cursor-${
                clickable ? "pointer" : "default"
              }
              transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]
              ${className}
              w-[250px] h-[350px]
              sm:w-[280px] sm:h-[390px]
              md:w-[320px] md:h-[440px]
              bg-black/50
            `}
            style={{ boxShadow: shadow }}
            onClick={() => clickable && rotate(1)}
          >
            <img src={src} alt={name} className="h-full w-full object-cover" />
            {/* fade edges so image blends nicely */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                WebkitMaskImage:
                  "radial-gradient(90% 85% at 50% 55%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 95%)",
                maskImage:
                  "radial-gradient(90% 85% at 50% 55%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 95%)",
              }}
            />
            {/* label */}
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 sm:p-4 text-center text-[11px] sm:text-xs text-gray-200">
              <div className="font-semibold">{name}</div>
              <div className="opacity-80">{role}</div>
            </figcaption>
          </figure>
        );
      })}

      {/* CTA under the stack */}
      <div className="absolute -bottom-14 sm:-bottom-16 left-0 right-0 flex justify-center">
        <button
          onClick={() => rotate(1)}
          className="rounded-full border border-lime-500/60 bg-black/50 px-4 sm:px-5 py-2 text-sm text-lime-300
                     shadow-[0_0_25px_rgba(132,204,22,0.25)]
                     transition-all hover:bg-black/70 hover:shadow-[0_0_35px_rgba(132,204,22,0.35)] hover:-translate-y-0.5 active:translate-y-0"
        >
          Take a quick detour!
        </button>
      </div>
    </div>
  );
}

const Brief = () => {
  return (
    <section className="relative overflow-hidden">
      {/* soft green glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(75% 60% at 50% 45%, rgba(16,185,129,0.12), rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
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

        {/* 3-column responsive grid */}
        <div className="grid items-start gap-10 lg:grid-cols-3">
          {/* LEFT */}
          <div className="text-center text-[13px] sm:text-sm leading-relaxed text-gray-200 space-y-6 max-w-[26rem] mx-auto">
            <p>
              Design, for me, is simply giving life to the many ideas constantly
              buzzing in my head. I love to draw, play with colors, and explore
              the endless possibilities that come from starting with a blank
              canvas.
            </p>
            <p>
              I’m a multidisciplinary designer, and I’ve been on this roller
              coaster for about 6 years now. My style has always been “Well, I
              think I can, so let’s try,” and that mindset has helped me pick up
              skills across different design niches.
            </p>
            <p>
              Over the years, I’ve had the chance to bring brands to life,
              collaborate with national organizations both locally and
              internationally, and just enjoy the process of creating.
            </p>
          </div>

          {/* MIDDLE — interactive stack */}
          <div className="relative flex justify-center">
            <CardStack />
          </div>

          {/* RIGHT */}
          <div className="max-w-[26rem] mx-auto">
            <div className="text-[13px] sm:text-sm leading-relaxed text-gray-200 space-y-5">
              <p>
                I’ve also worked across different teams, building my soft skills
                and doing my best to make sure my designs solve real problems—
                because at the end of the day, isn’t that what design is all
                about?
              </p>
              <p>
                And since I find the construction industry super fascinating (I
                studied Quantity Surveying, by the way), I like to think I’m
                discovering my purpose in connecting design and construction…
              </p>
              <p>or maybe it’s the other way around.</p>
            </div>

            {/* actions */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-lime-500/60 bg-black/60 px-4 py-2 text-xs font-medium text-lime-300
                           shadow-[0_0_24px_rgba(132,204,22,0.25)]
                           transition-all hover:bg-black/80 hover:shadow-[0_0_34px_rgba(132,204,22,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <FaDownload className="text-lime-400" />
                Download Resume
              </a>

              <div className="ml-auto flex items-center gap-2">
                {[
                  { Icon: FaLinkedinIn, label: "LinkedIn" },
                  { Icon: FaFacebookF, label: "Facebook" },
                  { Icon: FaTwitter, label: "Twitter" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
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
    </section>
  );
};

export default Brief;
