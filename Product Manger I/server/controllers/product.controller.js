const Product = require("../models/product.model");

module.exports={
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json({message: "Something went wrong when creating a new product", error: err}));
    },
    getAllProducts: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json({message: "Something went wrong when getting all products", error: err}));
    },
    getProduct: (req, res) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json({message: "Something went wrong when getting a product", error: err}));
    },
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json({message: "Something went wrong when updating a product", error: err}));
    },
    deleteProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(deletedProduct => res.json(deletedProduct))
            .catch(err => res.json({message: "Something went wrong when deleting a product", error: err}));
    }
}