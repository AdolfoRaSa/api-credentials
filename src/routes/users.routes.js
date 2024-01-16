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
router.get("/users/:user_id", getUserById);
router.post("/users", createNewUser);
router.delete("/users/:user_id", deleteUserById);
router.put("/users/:user_id", updateUserById);

export default router;
