import { Prisma, PrismaClient } from "@prisma/client";
import { genderDTO } from "../dto/gender.dto";

export class GenderService
{
    constructor (
        private prisma: PrismaClient = new PrismaClient
    ) {}

    async findGenderService () {
        try {
            const genders = await this.prisma.gender.findMany()
            return genders
        } catch (err) {
            console.error(err)
            return new Error("Error al guardar genero")
        }
    }

    async createGenderService (data: genderDTO) {
        try {
            const savedGender = await this.prisma.gender.create({
                data: {
                    name_gender: data.name_gender
                }
            })

            return savedGender
        } catch (error) {
            console.error(error)
            return new Error("Error al guardar genero")
        }
    }

    async updateGenderService (id: number, data: genderDTO) {
        try {
            
            const updateGender = await this.prisma.gender.update({
                where: {
                    id
                },
                data: {
                    name_gender: data.name_gender
                }
            })

            return updateGender

        } catch (error) {
            return new Error ("No se pudo actualizar")
        }
    }

    async deleteGenderService (id: number) {
        try {
            const deleteGender = await this.prisma.gender.delete({
                where:{
                    id
                }
            })

            return deleteGender
        } catch (error) {
            return new Error(`${error}`)
        }
    }
}