import express from "express";
import { adminregister } from "../controllers/adminController.js";

const router = express.Router();

router.post("/adminregister", adminregister);
export default router;
