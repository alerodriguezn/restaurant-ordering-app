import express from "express";
import { register, confirm, login, forgotPassword,checkToken,newPassword } from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";
import { profile } from "../controllers/userController.js";

const router = express.Router()

router.post("/", register) 
router.get("/confirm/:token", confirm)
router.post("/login", login)
router.post("/forgot-password",forgotPassword)
router.route("/forgot-password/:token").get(checkToken).post(newPassword)
router.get("/profile", checkAuth, profile)



export default router