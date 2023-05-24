import express from "express";
import { addOrder, getOrdersById, getAllOrders } from "../controllers/orderController.js";
import checkAuth from "../middleware/checkAuth.js";
import checkAdmin from "../middleware/checkAdmin.js";

const router = express.Router()

router.post("/add", checkAuth , addOrder) 

router.get("/allOrders", checkAdmin , getAllOrders)
router.get("/:id", checkAuth , getOrdersById)

export default router

