import 'dotenv/config';
import express, { Application } from "express";
import { sequelize } from './db';
import swaggerUi from "swagger-ui-express";
import router from "./routes";
import cors from "cors";

const PORT = Number(process.env.PORT);

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(router);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

async function start() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server start. http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}


start();


