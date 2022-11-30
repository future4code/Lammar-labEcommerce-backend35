import { app } from "./app";
import createCharacter from "./endpoints/createCharacters";
import getAllCharacters from "./endpoints/getAllCharacters";


app.get("/character", getAllCharacters)
app.put("/character",createCharacter)