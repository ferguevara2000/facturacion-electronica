/* eslint-disable quotes */
import { Router } from "express"
import { ProductController } from "../controllers/products.controller.js"
import { upload } from "../middlewares/uploads.js"

export const createProductRouter = ({ productModel }) => {
  const router = Router()
  const productController = new ProductController({ productModel })

  router.get("/", productController.getProducts)
  router.get("/:id", productController.getProductById)
  router.post("/", upload.single('imagen_url'), productController.saveProduct)
  router.put("/:id", upload.single('imagen_url'), productController.saveProduct)
  router.delete("/:id", productController.deleteProduct)

  return router
}
