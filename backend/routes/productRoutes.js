import express from "express";
import { addProduct,updateProduct,deleteProduct } from "../controllers/productController.js";


const router = express.Router()

router.post("/add", addProduct)


router
    .route("/:code")
    .put(updateProduct)
    .delete(deleteProduct)



export default router