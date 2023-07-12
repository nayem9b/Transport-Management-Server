import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { BusRoutes } from "../modules/bus/bus.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: UserRoutes,
  },
  {
    path: "/",
    route: BusRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
