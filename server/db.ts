import { Sequelize } from "sequelize";

const database: string = process.env.DB_NAME ?? "database";
const user: string = process.env.DB_USER ?? "user";
const password: string = process.env.DB_PASS ?? "password";

export const sequelize = new Sequelize(
    database,
    user,
    password,
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
    }
)