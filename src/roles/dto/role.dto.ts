import { IsNotEmpty } from "class-validator";

export class RoleDTO
{
    @IsNotEmpty()
    name_role!: string
}