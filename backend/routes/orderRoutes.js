import express from "express";
import { addOrder, getOrdersById } from "../controllers/orderController.js";
import checkAuth from "../middleware/checkAuth.js";


const router = express.Router()

router.post("/add", checkAuth , addOrder) 

router.get("/:id", checkAuth , getOrdersById)

export default router

