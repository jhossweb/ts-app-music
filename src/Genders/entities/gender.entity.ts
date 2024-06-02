import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity({ name: "genders" })
export class GenerEntity extends BaseEntity 
{
    @Column({
        type: "varchar",
        length: 50,
        unique: true
    })
    name_gender!: string
}