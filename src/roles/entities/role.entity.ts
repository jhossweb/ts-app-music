import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity({ name: "roles" })
export class RoleEntity extends BaseEntity
{
    @Column({
        unique: true,
        length: 30
    })
    name_role!: string
}