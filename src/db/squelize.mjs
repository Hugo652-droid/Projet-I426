import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
"db_products", // Nom de la DB qui doit exister
"DBUser", // Nom de l'utilisateur
"", // Mot de passe de l'utilisateur
{
host: "localhost",
//port: "6033", pour les conteneurs docker MySQL
dialect: "mysql",
logging: false,
}
);
const Product = ProductModel(sequelize, DataTypes);