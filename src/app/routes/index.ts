import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BlogRoutes } from "../modules/Blog/blog.router";
import { UserRoutes } from "../modules/User/user.route";
import { ContactRoutes } from "../modules/Contact/contact.route";
import { ProjectRoutes } from "../modules/Project/project.route";
const router = express.Router();

const moduleRoutes = [
  { path: "/user", route: UserRoutes },
  { path: "/auth", route: AuthRoutes },
  { path: "/blogs", route: BlogRoutes },
  { path: "/contact", route: ContactRoutes },
  { path: "/project", route: ProjectRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
