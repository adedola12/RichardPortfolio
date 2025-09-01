// src/components/Home/Tools.tsx
import React from "react";
import { icons } from "../../assets/assets";

/* ===== Capability pills ===== */
const CAPABILITIES = [
  "Brand Guidelines",
  "Campaigns",
  "UI/UX Design",
  "Publication Design",
  "Design Systems",
  "Product Design",
  "Landing Pages",
  "Event Branding",
  "Marketing Design",
  "Book Cover Design",
  "Logo Design",
  "Brand Identity Design",
  "Social Media Design",
  "Presentation Designs",
  "Pitch Deck Designs",
  "Company Profiles",
  "Prototyping",
  "Magazine Design",
];

/* ===== Icon rows (match your layout) ===== */
const ROW1 = [
  { src: icons.slack, label: "Slack" },
  { src: icons.drivelogo, label: "Google Drive" },
  { src: icons.group24, label: "Figma-like" },
  { src: icons.behance, label: "Behance" },
  { src: icons.ico, label: "Design Tool" },
  { src: icons.notion, label: "Notion" },
  { src: icons.teams, label: "Microsoft Teams" },
  { src: icons.adobe, label: "Adobe" },
  { src: icons.adobeI, label: "Adobe InDesign Badge" },
  { src: icons.openAI, label: "OpenAI" },
  { src: icons.behance, label: "Behance Alt" },
  { src: icons.illustr, label: "Adobe Illustrator" },
  { src: icons.photoshop, label: "Adobe Photoshop" },
  { src: icons.adobeI, label: "Adobe InDesign" },
];

// Google / misc tools line
const ROW2 = [
  { src: icons.gmail, label: "Gmail" },
  { src: icons.calender, label: "Google Calendar" },
  { src: icons.chrome, label: "Google Chrome" },
  { src: icons.docs, label: "Google Docs" },
  { src: icons.drivelogo, label: "Google Drive" },
  { src: icons.meet, label: "Google Meet" },
  { src: icons.note, label: "Google Keep" },
  { src: icons.sheet, label: "Google Sheets" },
  { src: icons.acrobat, label: "Adobe Acrobat" },
  { src: icons.cloud, label: "Adobe Cloud" },
  { src: icons.adobeBe, label: "Adobe Be" },
  { src: icons.illustr, label: "Adobe illustrator" },
  { src: icons.photoshop, label: "Adobe Photoshop" },
  { src: icons.adobeI, label: "Adobe Id" },
];

const ROW3 = [
  { src: icons.xd, label: "Adobe Xd" },
  { src: icons.adoberead, label: "Adobe Reader" },
  { src: icons.adobe, label: "Adobe" }, // if this isn't OneNote in your files, swap with the right asset
  { src: icons.openAI, label: "Open AI" },
  { src: icons.group24, label: "Figma-Like" },
];

const ICON_HOVER =
  "transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.07] " +
  "hover:drop-shadow-[0_0_18px_rgba(132,204,22,0.45)]";

const Tools: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
      {/* Title */}
      <p className="mb-8 text-center text-sm text-white/90">
        Here are a few things I can do...
      </p>

      {/* Capability pills */}
      <div className="mx-auto mb-12 flex max-w-[1100px] flex-wrap justify-center gap-4">
        {CAPABILITIES.map((label) => (
          <span
            key={label}
            className="select-none rounded-full border border-white/60 px-4 py-2 text-sm text-white/95
                       shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
                       hover:border-white hover:bg-white/5 transition"
          >
            {label}
          </span>
        ))}
      </div>

      {/* Sub-title */}
      <p className="mb-8 text-center text-sm text-white/80">
        ... and for tools...
      </p>

      {/* Icon rows */}
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-8">
        {/* Row 1 – larger */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
          {ROW1.map(({ src, label }, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt={label}
              title={label}
              loading="lazy"
              className={
                "h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.35)] " +
                ICON_HOVER
              }
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
          {ROW2.map(({ src, label }, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt={label}
              title={label}
              loading="lazy"
              className={
                "h-8 w-8 sm:h-10 sm:w-10 object-contain opacity-95 drop-shadow-[0_0_8px_rgba(0,0,0,0.35)] " +
                ICON_HOVER
              }
            />
          ))}
        </div>

        {/* Row 3 – office squares + adobe badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
          {ROW3.map(({ src, label }, i) => (
            <img
              key={`r3-${i}`}
              src={src}
              alt={label}
              title={label}
              loading="lazy"
              className={
                "h-8 w-8 sm:h-10 sm:w-10 object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.35)] " +
                ICON_HOVER
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
