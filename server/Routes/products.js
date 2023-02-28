import  express  from 'express';
import { getProducts, createProduct, getProductById, deleteProduct, updateProduct } from '../Controllers/ProductsController.js'

const router = express.Router();

router.route('/')
    .get(getProducts)
    .post(createProduct)

router.route('/:id')
    .get(getProductById)
    .delete(deleteProduct)
    .patch(updateProduct)

export default router;