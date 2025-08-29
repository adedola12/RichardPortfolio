import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { connectDB } from "./utils/db.js";
import projectsRouter from "./routes/projects.js";

dotenv.config();

const app = express();

// Security & basics
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN?.split(",") || "*",
    credentials: true,
  })
);


// Rate limiting (tweak as needed)
app.use("/api", rateLimit({ windowMs: 60_000, max: 120 }));

// API routes
// In your backend
app.get("/api/health", (_req, res) => res.json({ message: "Hello from backend!" }));

app.use("/api/projects", projectsRouter);

// Boot
const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`🚀 API on http://localhost:${PORT}`))
  )
  .catch((err) => {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  });
