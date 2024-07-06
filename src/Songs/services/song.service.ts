import { DeleteResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../../config/data-source";
import { SongDTO } from "../dto/SongDTO";
import { SongEntity } from "../entities/song.entity";
import { GenderService } from "../../Genders/services/gender.service";
import { GenderDTO } from "../../Genders/dto/gender.dto";


export class SongService 
{
    private repository = AppDataSource

    constructor(
        private readonly genderService: GenderService = new GenderService
    ){}

    async getAllSongService (): Promise<SongEntity[]> {
        return await this.repository.getRepository(SongEntity).find()
    }

    async getFindBySongService (name_song: string): Promise<SongEntity | null> {
        return await this.repository.getRepository(SongEntity)
                                    .createQueryBuilder("song")
                                    .where("name_song LIKE :name_song", { name_song: `%${name_song}%` })
                                    .getOne()
    }

    async getFindBySongWithGender(): Promise<SongEntity[]> {
        return await this.repository.getRepository(SongEntity)
                                    .find({
                                        relations: {
                                            genders: true,
                                        }
                                    })
    }

    async createSongService(data: SongDTO): Promise<SongEntity> {
        
        const save = await this.repository.getRepository(SongEntity).create(data)
        const saveGender = await this.genderService.findGenderByIds(data.genders)
        save.genders = saveGender
        return await this.repository.getRepository(SongEntity).save(save)
    }

    async updateNameSongService(id: number|string, name_song: SongDTO): Promise<UpdateResult> {
        return await this.repository.getRepository(SongEntity)
                                    .createQueryBuilder("songs")
                                    .where("id = :id", { id })
                                    .update(SongEntity)
                                    .set({name_song: name_song.name_song})
                                    .execute()
    }

    async updateGenderSongService(id: number, data: SongDTO){
       
        const songs = await this.repository.getRepository(SongEntity)
                                    .findOne({
                                        where: {
                                            id
                                        },
                                        relations: {
                                            genders: true
                                        }
                                    })
        return songs
    }

   
    
      

    async deleteGenderService (id: number|string): Promise<DeleteResult> {
        return await this.repository.getRepository(SongEntity)
                                    .delete(id)
    }
}