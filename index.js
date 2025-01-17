import express from "express";
import Router from "./config/router.js" ;
import dotenv from "dotenv";
import { connectDb } from "./db/helpers.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', Router);

async function startServer() {
    try {
        await connectDb();
        console.log("Mongoose is connected to DB")
        app.listen(process.env.PORT, () =>
            console.log("App is listening on port " + process.env.PORT)     
    );
    } catch (error){
    console.error("Something went wrong", error);
    }
}
startServer();

//app.listen(process.env.PORT, () => 
//    console.log ("App is listening on port: " + process.env.PORT));

