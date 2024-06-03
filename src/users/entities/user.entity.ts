import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

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

}