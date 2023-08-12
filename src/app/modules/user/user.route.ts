import express from "express";
import {
  VerifyUser,
  confirmation,
  createUser,
  getAdminUser,
  getAllUsers,
  getUser,
} from "./user.controller";
const router = express.Router();

router.get("/test", confirmation);
router.get("/users/:id", getAdminUser);
router.get("/users/user/:id", getUser);
router.post("/user", createUser);
router.get("/all-users", getAllUsers);
router.patch("/verify-user/:id", VerifyUser);
export const UserRoutes = router;
