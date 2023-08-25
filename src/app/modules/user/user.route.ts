import express from "express";
import {
  VerifyUser,
  confirmation,
  createUser,
  deleteSpecificUser,
  getAdminUser,
  getAllUsers,
  getUnverifiedUsers,
  getUser,
} from "./user.controller";
const router = express.Router();

router.get("/test", confirmation);
router.get("/users/:id", getAdminUser);
router.get("/users/user/:id", getUser);
router.get("/users/verify/unverified-user", getUnverifiedUsers);
router.post("/user", createUser);
router.get("/all-users", getAllUsers);
router.patch("/verify-user/:id", VerifyUser);
router.delete("/user/:id", deleteSpecificUser);
export const UserRoutes = router;
