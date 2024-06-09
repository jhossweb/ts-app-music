import { DeleteResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../../config/data-source";
import { GenderDTO } from "../dto/gender.dto";
import { GenderEntity } from "../entities/gender.entity";

export class GenderService
{
    private repository = AppDataSource

    async findGenderService(): Promise<GenderEntity[]> {
        const gender = await this.repository.getRepository(GenderEntity).find()
        return gender
    }

    async findGenderByName(name_gender: GenderDTO): Promise<GenderEntity | null> {
        return await this.repository.getRepository(GenderEntity)
                                    .createQueryBuilder("song")
                                    .where("name_gender LIKE :name_gender", { name_gender: `%${name_gender}%` })
                                    .getOne()
    }

    async createGenderService (gender: GenderDTO): Promise<GenderEntity> {
        const save = this.repository.getRepository(GenderEntity).create(gender)
        return await this.repository.getRepository(GenderEntity).save(save)
    }

    async updateGenderService(id: number|string, name_gender: GenderDTO): Promise<UpdateResult> {
        return await this.repository.getRepository(GenderEntity)
                                    .createQueryBuilder("genders")
                                    .where("id = :id", { id })
                                    .update(GenderEntity)
                                    .set({name_gender: name_gender.name_gender})
                                    .execute()
    }

    async deleteGenderService (id: number|string): Promise<DeleteResult> {
        return await this.repository.getRepository(GenderEntity)
                                    .delete(id)
    }
}