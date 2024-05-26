import { Request, Response } from "express";
import { json } from "stream/consumers";

export class SongController 
{
    index (req: Request, res: Response) {
        return res.json("upload")
    }

    store(req: Request, res: Response) {
        console.log(req.file)
        return res.json("guardado")
    }
}