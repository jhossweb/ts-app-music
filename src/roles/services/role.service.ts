import { DeleteResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../../config/data-source";
import { RoleDTO } from "../dto/role.dto";
import { RoleEntity } from "../entities/role.entity";

export class RoleService
{
    private readonly repository = AppDataSource

    async getAllRoles (): Promise<RoleEntity[]> {
        return this.repository.getRepository(RoleEntity).find()
    }

    async getRoleByName (role_name: string): Promise<RoleEntity | null> {
        return this.repository.getRepository(RoleEntity)
                                .createQueryBuilder("roles")
                                .where("role_name = :role_name", { role_name })
                                .getOne()
    }

    async createdRole (role: RoleDTO): Promise<RoleEntity> {
        const newRole = this.repository.getRepository(RoleEntity).create(role)
        return await this.repository.getRepository(RoleEntity).save(newRole) 
    }

    async updateRoleService(id: number|string, name_role: RoleDTO): Promise<UpdateResult> {
        return await this.repository.getRepository(RoleEntity)
                                    .createQueryBuilder("roles")
                                    .where("id = :id", { id })
                                    .update(RoleEntity)
                                    .set({name_role: name_role.name_role})
                                    .execute()
    }

    async deleteRoleService (id: number|string): Promise<DeleteResult> {
        return await this.repository.getRepository(RoleEntity)
                                    .delete(id)
    }
}