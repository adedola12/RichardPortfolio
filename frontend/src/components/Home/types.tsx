// src/components/Home/types.ts

export const CATEGORIES = [
  "Featured Projects",
  "Brand Identity",
  "Websites",
  "Product UI/UX Designs",
  "Publication",
  "Presentation",
  "Event Branding",
  "Marketing Designs",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: Category | "Other";
  image: string;
};
