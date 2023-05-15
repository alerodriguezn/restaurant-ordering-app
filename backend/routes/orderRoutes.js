import express from "express";
import { addOrder } from "../controllers/orderController.js";
import checkAuth from "../middleware/checkAuth.js";


const router = express.Router()

router.post("/add", checkAuth , addOrder) 

export default router

