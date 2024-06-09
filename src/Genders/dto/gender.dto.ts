import { IsNotEmpty } from "class-validator";

export class GenderDTO {

    @IsNotEmpty()
    name_gender!: string

}