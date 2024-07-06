import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../users/entities/user.entity";

@Entity({ name: "roles" })
export class RoleEntity extends BaseEntity
{
    @Column({
        unique: true,
        length: 30
    })
    name_role!: string

    @OneToMany( () => UserEntity, user => user.role_id )
    users!: UserEntity[]
}