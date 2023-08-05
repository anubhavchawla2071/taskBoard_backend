import express from "express";
import {getMyDetails,login, logout, register} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router =express.Router();

router.post("/register",register);

router.post("/login",login);

router.get("/profile",isAuthenticated ,getMyDetails);

router.get("/logout",logout);

export default router;