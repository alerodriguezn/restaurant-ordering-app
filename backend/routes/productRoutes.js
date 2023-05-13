import express from "express";
import { addProduct,updateProduct,deleteProduct } from "../controllers/productController.js";
import checkAuth from "../middleware/checkAuth.js";


const router = express.Router()

router.post("/add", checkAuth , addProduct)


router
    .route("/:code")
    .put(checkAuth, updateProduct)
    .delete(checkAuth, deleteProduct)



export default router