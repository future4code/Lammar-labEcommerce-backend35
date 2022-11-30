import express, { Express } from "express";
import cors from "cors"
import { appendFile } from "fs";

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log("server ok")
})