import { DeleteResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../../config/data-source";
import { UserDTO } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";
import * as bcrypt from 'bcrypt'

export class UsersServices
{
    private repository = AppDataSource

    async getAllUsers(): Promise<UserEntity[]> {
        return this.repository.getRepository(UserEntity).find()
    }

    async getUserByUsername (username: string): Promise<UserEntity | null> {
        return this.repository.getRepository(UserEntity)
                                .createQueryBuilder("users")
                                .where("username = :username", { username })
                                .getOne()
    }

    async createUserService(data: UserDTO): Promise<UserEntity> {
        const save = this.repository.getRepository(UserEntity).create(data)
        const hash = await this.passHash(save.password)

        save.password = hash
        return await this.repository.getRepository(UserEntity).save(save)
    }

    async updateUserService(id: number|string, username: UserDTO): Promise<UpdateResult> {
        return await this.repository.getRepository(UserEntity)
                                    .createQueryBuilder("users")
                                    .where("id = :id", { id })
                                    .update(UserEntity)
                                    .set({username: username.username})
                                    .execute()
    }

    async deleteGenderService (id: number|string): Promise<DeleteResult> {
        return await this.repository.getRepository(UserEntity)
                                    .delete(id)
    }

    async passHash(pass: string) {
        return await bcrypt.hash(pass, 10)
    }

    async compareHash(pass:string, passHash: string) {
        return await bcrypt.compare(pass, passHash)
    }
}