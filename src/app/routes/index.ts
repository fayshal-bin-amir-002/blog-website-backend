import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BlogRoutes } from "../modules/Blog/blog.router";
import { AdminRoutes } from "../modules/Admin/admin.route";
const router = express.Router();

const moduleRoutes = [
  { path: "/auth", route: AuthRoutes },
  { path: "/blogs", route: BlogRoutes },
  { path: "/admin", route: AdminRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
