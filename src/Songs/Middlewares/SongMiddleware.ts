import { NextFunction, Request, Response } from 'express'
import multer, { FileFilterCallback } from 'multer'
import path from 'node:path'
import crypto from "node:crypto"

export class SongMiddleware
{

    storage() {
        const storage = multer.diskStorage({
            destination: path.join(__dirname, "/../../../public/storages/songs"), // Corrige la concatenación
            filename: function (
                req: Request,
                file: Express.Multer.File,
                cb: (err: Error|null, destination: string) => void
            ) {
                let uuid = crypto.randomUUID()
                cb (
                    null,
                    uuid + file.originalname.substring(file.originalname.lastIndexOf("."))
                )
            }
        })
    
        return storage
    }

    FileFilter (
        req: Request,
        file: Express.Multer.File,
        cb: FileFilterCallback
    ) {
        let fileTypes: string[] = ["audio/mpeg"]

        if(fileTypes.some( (fileType) => fileType === file.mimetype )) {
            return cb(null, true)
        }

        return cb(null, false)
    }

    upload (req: Request, res: Response, next: NextFunction){
        return multer({

            storage: this.storage(),
            fileFilter: this.FileFilter,

        }).single("song") (req, res, (err) => {
            // Invalid file type, message will return from fileFilter callback
            if (err) return res.status(400).json(err.message);

            // File not selected or incorrect format
            if (!req.file)
            return res.status(400).json({
                msg: "solo formatos de audio: mp3.",
            });

           

            // Success
            next();
        })
    }
}