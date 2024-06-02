import { IsNotEmpty, Min } from "class-validator";

export class SongDTO
{
    @IsNotEmpty()
    name!: string

    @IsNotEmpty()
    url_song!: string

    @IsNotEmpty()
    @Min(1)
    gender_id!: number[]
}