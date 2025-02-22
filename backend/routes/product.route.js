import express from "express";
import {
    deleteProduct,
    createProduct,
    getRecommendedProducts,
    getAllProducts,
    getFeaturedProducts,
    getProductsByCategory,
    toggleFeatureProduct,
} from "../controllers/product.controller.js";
import { adminRoute,protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();
router.get("/",protectRoute,adminRoute,getAllProducts)
router.get("/featured",getFeaturedProducts)
router.get("/category/:category",getProductsByCategory);

router.get("/recommendations",getRecommendedProducts)

router.post("/",productRoute,adminRoute,createProduct);
router.patch("/:id",productRoute,adminRoute,toggleFeatureProduct);

router.post("/:id",productRoute,adminRoute,deleteProduct);

export default router;