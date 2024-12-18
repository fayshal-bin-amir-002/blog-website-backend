import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BlogRoutes } from "../modules/Blog/blog.router";
const router = express.Router();

const moduleRoutes = [
  { path: "/auth", route: AuthRoutes },
  { path: "/blogs", route: BlogRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
