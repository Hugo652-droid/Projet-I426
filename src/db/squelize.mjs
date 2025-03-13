import { Sequelize,DataTypes } from "sequelize";
import {ProductModel} from "../model/product.mjs";
import {MagasinModel} from "../model/magasin.mjs";
import {produits} from "./mock-produits.mjs";
import {magasin} from "./mock-magasin.mjs";
const sequelize = new Sequelize(
"db_products", // Nom de la DB qui doit exister
"root", // Nom de l'utilisateur
"Pa$$w0rd1", // Mot de passe de l'utilisateur
{
host: "localhost",
//port: "6033", pour les conteneurs docker MySQL
dialect: "mysql",
logging: false,
}
);
const Product = ProductModel(sequelize, DataTypes);
const Magasin = MagasinModel(sequelize, DataTypes);

let initDb = () => {
    return sequelize
        .sync({alter: true}) // Force la synchro => donc supprime les données également
        .then((_) => {
            // importMagasins();
            console.log("La base de données a bien été synchronisée");
        });
};
function importProducts() {
    produits.map((p) => {
       Product.create({
           name: p.name,
           price: p.price,
           category: p.category,
           level: p.level
       }).then((p) => console.log(p.toJSON()));
    });
}
function importMagasins() {
    magasin.map((m) => {
       Magasin.create({
           name: m.name,
           address: m.adresse,
           level: m.level
       }).then((m) => console.log(m.toJSON()));
    });
}


export { sequelize, Magasin ,Product,initDb };