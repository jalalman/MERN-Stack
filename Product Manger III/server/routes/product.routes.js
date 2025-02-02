const productController = require('../controllers/product.controller');

module.exports = app => {
    app.post('/api/products', productController.createProduct);
    app.get('/api/products', productController.getAllProducts);
    app.get('/api/products/:id', productController.getProduct);
    app.put('/api/products/:id/edit', productController.updateProduct);
    app.delete('/api/products/:id/delete', productController.deleteProduct);
}