import express from 'express';
// Take in POST request bodies
import bodyParser from 'body-parser';
// Importing products routes
import productsRoutes from './Routes/products.js'


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Set the path and run products routes
app.use('/products', productsRoutes);

app.get('/', (req, res) => {
    res.send('hello from our page');
});

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
});