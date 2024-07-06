import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { GenderEntity } from "../../Genders/entities/gender.entity";

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

    @ManyToMany( () => GenderEntity, (gender) => gender.songs )
    @JoinTable({
        name: "gender_song",
        joinColumn: { name: "song_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "gender_id", referencedColumnName: "id" } //por modificar migraciones
    })
    genders!: GenderEntity[]
}