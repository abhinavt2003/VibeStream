import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

//router se router bnaenge

const router = Router()

router.route("/register").post(registerUser)

export default router