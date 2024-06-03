import { NextFunction, Request, Response } from "express";
import { RoleDTO } from "../dto/role.dto";
import { validate } from "class-validator";

export class RoleMiddleware
{
    validRole (
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { name_role } = req.body
        const valid = new RoleDTO

        valid.name_role = name_role

        validate(valid)
            .then( (err) => {
                if(err.length > 0) {
                    return res.json(err)
                } else {
                    next()
                }
            } )
    }
}