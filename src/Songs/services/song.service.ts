import { AppDataSource } from "../../config/data-source";
import { SongDTO } from "../dto/SongDTO";
import { SongEntity } from "../entities/song.entity";

export class SongService 
{
    private repository = AppDataSource

    async getAllSongService (): Promise<SongEntity[]> {
        return await this.repository.getRepository(SongEntity).find()
    }

    async getFindBySongService (name_song: string): Promise<SongEntity | null> {
        return await this.repository.getRepository(SongEntity)
                                    .createQueryBuilder("song")
                                    .where("name_song LIKE :name_song", { name_song: `%${name_song}%` })
                                    .getOne()
    }

    async createSongService(data: SongDTO): Promise<SongEntity> {
        console.log(data)
        
        const save = await this.repository.getRepository(SongEntity).create(data)
        return await this.repository.getRepository(SongEntity).save(save)
    }
}