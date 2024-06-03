import { Request, Response } from "express";
import { CustomerResponse } from "../../libs/customer.response";
import { UsersServices } from "../services/users.services";

export class UserController
{
    constructor(
        private readonly customerReponse: CustomerResponse = new CustomerResponse,
        private readonly userService: UsersServices = new UsersServices
    ) {}

    index(req: Request, res: Response){
        return res.json("index")
    }

    async store(req: Request, res: Response) {
        try {
            const validatedUsername = await this.userService.getUserByUsername(req.body.username)
            if(validatedUsername)
                return this.customerReponse.InternalServerError(res, "nombre de usuario en uso")

            const user = await this.userService.createUserService(req.body)
            return this.customerReponse.Ok(res, user)
        } catch (error) {
            return this.customerReponse.Error(res)
        }
    }
}