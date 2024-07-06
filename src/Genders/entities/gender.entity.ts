import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { SongEntity } from "../../Songs/entities/song.entity";

@Entity({ name: "genders" })
export class GenderEntity extends BaseEntity 
{
    @Column({
        type: "varchar",
        length: 50,
        unique: true
    })
    name_gender!: string

  @ManyToMany( () => SongEntity, (song) => song.genders )
  songs!: SongEntity[]
}