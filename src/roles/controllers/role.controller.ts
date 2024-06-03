import { Request, Response } from "express";
import { CustomerResponse } from "../../libs/customer.response";
import { RoleService } from "../services/role.service";

export class RoleController
{
    constructor(
        private readonly customerRespopnse: CustomerResponse = new CustomerResponse,
        private readonly roleService: RoleService = new RoleService
    ) {}

    async index (req: Request, res: Response) {}

    async store (req: Request, res: Response) {
        try {
            const role = await this.roleService.createdRole(req.body)
            if(!role)
                return this.customerRespopnse.InternalServerError(res, "Error al crear rol")

            return this.customerRespopnse.Ok(res)
        } catch (error) {
            return this.customerRespopnse.Error(res)
        }
    }
}