import express from "express";
import validateRequest from "../../middleware/validateRequest";
import {
  projectValidationSchema,
  updateProjectValidationSchema,
} from "./project.validation";
import { ProjectControllers } from "./project.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(projectValidationSchema),
  ProjectControllers.createProject
);

router.get("/", ProjectControllers.getAllProjects);

router.get("/featured-projects", ProjectControllers.featuredProjects);

router.get("/:id", ProjectControllers.getAProject);

router.patch(
  "/:id",
  validateRequest(updateProjectValidationSchema),
  ProjectControllers.updateProject
);

router.delete("/:id", ProjectControllers.deleteProject);

export const ProjectRoutes = router;
