import { Router } from "express";
import {
  getUsers,
  createNewUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/users.controllers";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createNewUser);
router.delete("/users/:id", deleteUserById);
router.put("/users/:id", updateUserById);

export default router;
