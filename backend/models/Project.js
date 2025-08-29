import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    summary: String,
    tech: [String],
    repoUrl: String,
    liveUrl: String,
    coverImage: String,
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
