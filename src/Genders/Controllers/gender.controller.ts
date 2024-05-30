import { Request, Response } from "express";
import { GenderService } from "../Services/gender.service";

export class GenderController 
{

    constructor(
        private readonly genderService: GenderService = new GenderService
    ) {}

    async index(req: Request, res: Response) {
        const genders = await this.genderService.findGenderService()

        if(!genders)
            return new Error("No se Pudo mostrar generos")

        return res.json(genders)
    }

    async store(req: Request, res: Response) {
        const genderSaved = await this.genderService.createGenderService(req.body)

        if(!genderSaved) 
            return new Error("No se guardó")

        return res.json(genderSaved)
    }

    async update (req: Request, res: Response) {
        const id = Number(req.params.id)
        const genderUpdate = await this.genderService.updateGenderService(id, req.body)

        if(!genderUpdate)
            return new Error("No se actuliazó")

        return res.json(genderUpdate)
    }

    async delete (req: Request, res: Response) {
        const id = Number(req.params.id)
        const genderDelete = await this.genderService.deleteGenderService(id)

        if(!genderDelete)
            return new Error("No se actuliazó")

        return res.json(genderDelete)
    }
}