import { NextFunction, Request, Response } from "express";
import { UserDTO } from "../dto/user.dto";
import { validate } from "class-validator";

export class UserMiddleware
{
    userValidator(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { username, password } = req.body
        const valid = new UserDTO

        valid.username = username
        valid.password = password

        validate(valid)
            .then( (err) => {
                if(err.length > 0) {
                    res.json(err)
                } else {
                    next()
                }
            } )
    }
}