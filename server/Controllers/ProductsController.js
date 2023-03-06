import { readStorage, appendToStorage, getStorageObject, delStorageObject, patchStorageObject} from '../services/ProductsServices.js';

const PATH  = './storage/products.json'

// Return all products
export const getProducts = (req , res) => readStorage(PATH, data => res.send(JSON.parse(data)));
   
// Create product
export const createProduct = (req, res) => appendToStorage(PATH, req.body, data => res.send(data));

 // Get product by id
export const getProductById = (req, res) => {
    const { id } = req.params;

    getStorageObject(PATH, id, data => res.send(data));
};

// Delete products by id
export const deleteProduct = (req, res) => {
    const { id } = req.params;

    delStorageObject(PATH, id , data => res.json(data));
}

// Upodate product by id (using patch method)
export const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, type, price} = req.body;

    patchStorageObject(PATH, id, [name, type, price],  data => res.json(data));
}