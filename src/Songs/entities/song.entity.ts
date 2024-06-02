import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity({ name: "song" })
export class SongEntity extends BaseEntity
{
    @Column({
        type: "varchar",
        nullable: false,
        unique: true,
        length: 50
    })
    name_song!: string

    @Column({
        type: "varchar",
        nullable: false
    })
    url_song!: string
}