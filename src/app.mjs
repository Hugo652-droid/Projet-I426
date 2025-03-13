import express from "express";
import {productsRouter} from "./routes/produits.mjs";
import {magasinRouter} from "./routes/magasins.mjs";
import {initDb, sequelize} from "./db/squelize.mjs";

const app = express();
const port = 3000;

sequelize
    .authenticate()
    .then((_) => console.log("La connexion à la base de données a bien été établie"))
    .catch((error) => console.error(`Impossible de se connecter à la DB: ${error}`));


initDb();


app.use(express.json());

app.listen(port, () =>
    console.log(`Notre application est démarée sur : http://localhost:${port}`)
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/produits", productsRouter);
app.use("/magasins", magasinRouter);