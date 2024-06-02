import { Request, Response } from "express";
import { CustomerError } from "../../libs/customer.errors";


export class SongController 
{
    constructor(
        private readonly customerError: CustomerError = new CustomerError
    ) {}

    async index (req: Request, res: Response) {
        try {
            return res.json("controller song")
            
        } catch (error) {
            return this.customerError.Error(error)
        }
    }

    async store(req: Request, res: Response) {

      return res.json("")
    }
}