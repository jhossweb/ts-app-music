import express, { Application, urlencoded } from "express";
import { SongRouter } from "./Songs/song.router";
import { GenderRouter } from "./Genders/gender.router";

export class AppServer
{
    private app: Application
    private port: number = 3000

    constructor () {
        this.app = express()

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
            new GenderRouter().router,
            new SongRouter().router
        ]
    }

    listen() {
        this.app.listen(this.port)
        console.log(`Server on port ${this.port}`)
    }
}