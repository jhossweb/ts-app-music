import { IsNotEmpty, IsOptional, Min } from "class-validator";
import { GenderEntity } from "../../Genders/entities/gender.entity";

export class SongDTO
{
    @IsNotEmpty()
    name_song!: string

    @IsNotEmpty()
    url_song!: string

    @IsNotEmpty()
    @IsOptional()
    genders!: GenderEntity[]
}