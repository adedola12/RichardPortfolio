import { Router } from "express";
import {
  getProjects,
  getProjectBySlug,
  seedProjects,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/", getProjects);
router.get("/seed", seedProjects); // remove in production
router.get("/:slug", getProjectBySlug);

export default router;
