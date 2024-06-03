import { IsNotEmpty, Min } from "class-validator";

export class SongDTO
{
    @IsNotEmpty()
    name_song!: string

    @IsNotEmpty()
    url_song!: string
}