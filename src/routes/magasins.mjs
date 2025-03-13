import express from "express";
import {Magasin} from "../db/squelize.mjs";

const magasinRouter = express();

magasinRouter.get("/", (req, res) => {
    Magasin.findAll().then((magasins) => {
        res.json(magasins);
    });
});

magasinRouter.get("/:id", (req, res) => {
    Magasin.findByPk(req.params.id).then((magasin) => {
        if (magasin) {
            res.json(magasin);
        } else {
            res.status(404).send("Product not found");
        }
    });
});

magasinRouter.post("/", (req, res) => {
    Magasin.create(req.body)
        .then((magasin) => {
            res.status(201).json(magasin);
        })
        .catch((error) => {
            console.error("Error creating product:", error);
            res.status(500).send("Internal Server Error");
        });
});

magasinRouter.put("/:id", (req, res) => {
    Magasin.update(req.body, {
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

magasinRouter.delete("/:id", (req, res) => {
    Magasin.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if (result === 1) {
            res.status(204).send();
        } else {
            res.status(404).send("Magasin not found");
        }
    });
});





export { magasinRouter };