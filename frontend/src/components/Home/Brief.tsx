import { assets } from "../../assets/assets";
import {
  FaDownload,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Brief = () => {
  return (
    <section className="relative overflow-hidden">
      {/* green background glow behind the whole section */}
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
          <h3 className="text-sm tracking-[0.18em] text-white/80 uppercase">
            How about a brief
          </h3>
          <p
            className="mt-2 text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ fontFamily: "Zialothus, 'Great Vibes', cursive" }}
          >
            brief introduction
          </p>
        </div>

        {/* 3-column layout */}
        <div className="grid items-start gap-10 lg:grid-cols-3">
          {/* LEFT COLUMN — paragraphs (centered & narrow like figma) */}
          <div className="text-center text-sm leading-relaxed text-gray-200 space-y-6 max-w-[26rem] mx-auto">
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

          {/* MIDDLE COLUMN — stacked neon cards */}
          <div className="relative mx-auto w-full max-w-[420px]">
            {/* back card */}
            <div
              className="absolute left-1/2 top-2 h-[440px] w-[300px] -translate-x-1/2 -rotate-6 rounded-2xl bg-black/60"
              style={{
                boxShadow:
                  "inset 0 0 0 2px rgba(132,204,22,0.6), 0 0 35px rgba(132,204,22,0.25)",
              }}
            />
            {/* mid card */}
            <div
              className="absolute left-[58%] top-6 h-[440px] w-[300px] -rotate-[-4deg] -translate-x-1/2 rounded-2xl bg-black/60"
              style={{
                boxShadow:
                  "inset 0 0 0 2px rgba(132,204,22,0.6), 0 0 35px rgba(132,204,22,0.25)",
              }}
            />
            {/* top / main card */}
            <figure
              className="relative mx-auto h-[460px] w-[320px] rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  "inset 0 0 0 2px rgba(132,204,22,0.85), 0 0 40px rgba(132,204,22,0.35)",
              }}
            >
              <img
                src={assets.ownImg}
                alt="Profile"
                className="h-full w-full object-cover"
              />
              {/* name label like the mock */}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-center text-xs text-gray-200">
                <div className="font-semibold">Samson Faboyo</div>
                <div className="text-[11px] opacity-80">Design Lead</div>
              </figcaption>
            </figure>

            {/* CTA under the cards */}
            <div className="mt-8 flex justify-center">
              <button className="rounded-full border border-lime-500/60 bg-black/50 px-5 py-2 text-sm text-lime-300 shadow-[0_0_25px_rgba(132,204,22,0.25)] hover:bg-black/70 transition-colors">
                Take a quick detour!
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN — paragraphs + buttons */}
          <div className="max-w-[26rem] mx-auto">
            <div className="text-sm leading-relaxed text-gray-200 space-y-5">
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
                className="inline-flex items-center gap-2 rounded-full border border-lime-500/60 bg-black/60 px-4 py-2 text-xs font-medium text-lime-300 shadow-[0_0_24px_rgba(132,204,22,0.25)] hover:bg-black/80 transition-colors"
              >
                <FaDownload className="text-lime-400" />
                Download Resume
              </a>

              <div className="ml-auto flex items-center gap-2">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/40 text-white/80 hover:text-black hover:bg-lime-400 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={14} />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/40 text-white/80 hover:text-black hover:bg-lime-400 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/40 text-white/80 hover:text-black hover:bg-lime-400 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brief;
