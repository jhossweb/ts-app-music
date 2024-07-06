import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { RoleEntity } from "../../roles/entities/role.entity";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity
{

    @Column({
        unique: true,
        length: 20,
        nullable: false
    })
    username!: string

    @Column({
        nullable: false
    })
    password!: string

    @ManyToOne( () => RoleEntity, role => role.users)
    @JoinColumn({ name: "role_id" })
    role_id!: RoleEntity

}