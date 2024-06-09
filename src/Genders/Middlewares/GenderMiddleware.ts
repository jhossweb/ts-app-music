import { NextFunction, Request, Response } from "express";
import { GenderDTO } from "../dto/gender.dto";
import { validate } from "class-validator";

export class GenderMiddleware
{
    genderValidator (
        req: Request, 
        res: Response, 
        next: NextFunction) {
            
            const { name_gender } = req.body
            const valid = new GenderDTO

            valid.name_gender = name_gender

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