import { Request, Response } from "express";
import { SongRepository } from "../Repository/song.repository";


export class SongController 
{
    constructor(
        private readonly songRepository: SongRepository = new SongRepository 
    ) {}

    async index (req: Request, res: Response) {
        const songs = await this.songRepository.allSongRepository()
        return res.json(songs)
    }

    async store(req: Request, res: Response) {

        let file = req.file as Express.Multer.File
        const nameSong = req.body.nameSong
        
        const savedSong = await this.songRepository.createSongRepository(nameSong, file.path)
        return res.json( savedSong )
    }
}