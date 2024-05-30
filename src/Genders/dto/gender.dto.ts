import { IsNotEmpty } from "class-validator";

export class genderDTO {

    @IsNotEmpty()
    name_gender!: string

}