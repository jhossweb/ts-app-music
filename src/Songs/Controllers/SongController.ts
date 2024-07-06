import { Request, Response } from "express";
import { SongService } from "../services/song.service";
import { CustomerResponse } from "../../libs/customer.response";


export class SongController 
{
    constructor(
        private readonly customerResponse: CustomerResponse = new CustomerResponse,
        private readonly songService: SongService = new SongService
    ) {}

    async index (req: Request, res: Response) {
        try {
            
            const songs = await this.songService.getFindBySongWithGender()
            if(!songs)
                return this.customerResponse.NotFound(res, "No hay Canciones para mostrar")

            return this.customerResponse.Ok(res, songs)
            
        } catch (error) {
            return this.customerResponse.Error(error)
        }
    }

    async show(req: Request, res: Response) {
        try {
            const name_song = req.params.name_song
            
            const search = await this.songService.getFindBySongService(name_song)
            if(!search) 
                return this.customerResponse.NotFound(res, "No se encontró la cacnción")

            return this.customerResponse.Ok(res, search)
        } catch (error) {
            return this.customerResponse.Error(res)
        }
    }

    async store(req: Request, res: Response) {
        try {
            const file = req.file as Express.Multer.File
            const { name_song, genders } = req.body

            const uploadFile = {
                name_song: name_song,
                url_song: file.path,
                genders: genders
            }
            
            const songSaved = await this.songService.createSongService(uploadFile)

            if(!songSaved)
                return this.customerResponse.InternalServerError(res, "No se pudo Error al subir la concion")
            console.log(req.body)

            return this.customerResponse.Ok(res, "Concion subida con exito")
        } catch (error) {
            return this.customerResponse.InternalServerError(res, error)
        }
    }

    async update (req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const songUpdate = await this.songService.updateGenderSongService(id, req.body)

            if(!songUpdate) return this.customerResponse.Error("no se actualizo la cancion")
            return res.json(songUpdate)
        } catch (error) {
            return this.customerResponse.InternalServerError(res, error)
        }
    }
}