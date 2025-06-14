import express from "express";
import {protectRoute} from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/messages/:id", protectRoute, getMessages);  // More specific path
router.post("/send/:id", protectRoute, sendMessage);

export default router;
