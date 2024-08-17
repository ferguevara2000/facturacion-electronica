/* eslint-disable quotes */
import { Router } from "express"
import { ProductController } from "../controllers/products.controller.js"

export const createProductRouter = ({ productModel }) => {
  const router = Router()
  const productController = new ProductController({ productModel })

  router.get("/", productController.getProducts)
  router.get("/:id", productController.getProductById)
  router.post("/", productController.saveProduct)
  router.put("/:id", productController.saveProduct)
  router.delete("/:id", productController.deleteProduct)

  return router
}
