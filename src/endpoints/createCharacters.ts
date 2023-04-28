import { Request, Response } from "express";
import { connection } from "../connection";
// import {characters} from "../data"

export default async function createCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, gender, description } = req.body;

    console.log(req.headers["content-Type"]);

    // characters.push({
    //     id:Date.now(),
    //     name,
    //     gender,
    //     description
    // })

    await connection("characters").insert({ name, gender, description });

    res.status(201).end();
  } catch (error) {
    res.status(500).end();
  }
}
