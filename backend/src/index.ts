import "reflect-metadata"
import express,{Express} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

const app: Express = express();

app.use(cors())
dotenv.config()

app.use(express.json())

async function connexionDB() {
    if (!process.env.DATABASE_URL) {
        throw new Error("pas d'environnement");
        process.exit(1)
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL,{dbName: process.env.DATABASE_NAME})
        console.log("CONNEXION REUSSI");
        app.listen(process.env.PORT, ()=> {
            console.log(`le serveur est lance sur http://localhost:${process.env.PORT}`);
            
        })
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

connexionDB()