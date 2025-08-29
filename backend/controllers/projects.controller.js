import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  const items = await Project.find().sort({ createdAt: -1 });
  res.json(items);
};

export const getProjectBySlug = async (req, res) => {
  const item = await Project.findOne({ slug: req.params.slug });
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
};

// (optional) seed sample
export const seedProjects = async (_req, res) => {
  const exist = await Project.countDocuments();
  if (exist) return res.json({ message: "Already seeded" });
  await Project.create([
    {
      title: "Dev Portfolio",
      slug: "dev-portfolio",
      summary: "A blazing-fast Next.js portfolio with a custom CMS.",
      tech: ["Next.js", "Tailwind", "TypeScript", "Express", "MongoDB"],
      repoUrl: "https://github.com/you/dev-portfolio",
      liveUrl: "https://yourdomain.com",
      coverImage: "/images/sample1.jpg",
    },
  ]);
  res.json({ message: "Seeded" });
};
