import { Request, Response } from "express";


export class SongController 
{
    index (req: Request, res: Response) {
        return res.json("upload")
    }

    store(req: Request, res: Response) {
        
        let file = req.file as Express.Multer.File
        const nameSong = req.body.nameSong

        return res.json({
            file,
            nameSong
        })
    }
}