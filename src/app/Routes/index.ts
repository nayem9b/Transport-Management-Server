import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { BusRoutes } from "../modules/bus/bus.route";
import { BusRequisition } from "../modules/requisition/requisition.route";
import { BusInfoRoute } from "../modules/bus/busInfo/busInfo.route";
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
  {
    path: "/",
    route: BusRequisition,
  },
  {
    path: "/",
    route: BusInfoRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
