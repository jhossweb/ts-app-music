import express, { Application, urlencoded } from "express";
import { SongRouter } from "./Songs/song.router";
import { Conexion } from "./config/conexion";
import { DataSource } from "typeorm";
import { UserRouter } from "./users/user.router";

export class AppServer extends Conexion
{
    private app: Application
    private port: number = 3000

    constructor () {
        super()
        this.app = express()
        this.dbConexion()

        this.middlewares()
        this.app.use(this.routes())
    }

    private middlewares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.static(__dirname + "/../public"))
    }

    private routes (): Array<express.Router> {
        return [
            new SongRouter().router,
            new UserRouter().router
        ]
    }

    private async dbConexion (): Promise<DataSource> {
        return this.initConexion
    }

    listen() {
        this.app.listen(this.port)
        console.log(`Server on port ${this.port}`)
    }
}