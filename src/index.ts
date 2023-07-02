import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { postsRouter } from "./posts/posts.router";

dotenv.config();

//A porta está definida no arquivo .env

if (!process.env.PORT) {
    process.exit(1);
}

const PORT = process.env.PORT;
 
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/posts", postsRouter);

app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});