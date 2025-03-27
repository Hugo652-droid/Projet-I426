import express from "express";
import {Product} from "../db/squelize.mjs";

const productsRouter = express();

productsRouter.get("/", (req, res) => {
    Product.findAll().then((products) => {
        res.json(products);
    });
});

productsRouter.get("/:id", (req, res) => {
   Product.findByPk(req.params.id).then((product) => {
         if (product) {
              res.json(product);
         } else {
              res.status(404).send("Product not found");
         }
   });
});

productsRouter.post("/", (req, res) => {
    Product.create(req.body)
        .then((product) => {
            res.status(201).json(product);
        })
        .catch((error) => {
            console.error("Error creating product:", error);
            res.status(500).send("Internal Server Error");
        });
});

productsRouter.put("/:id", (req, res) => {
    Product.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if (result[0] === 1) {
            res.status(204).send();
        } else {
            res.status(404).send("Product not found");
        }
    });
});

productsRouter.delete("/:id", (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if (result === 1) {
            res.status(204).send();
        } else {
            res.status(404).send("Product not found");
        }
    });
});





export { productsRouter };