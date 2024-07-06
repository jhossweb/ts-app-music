import { BaseRouter } from "../config/base.router";
import { SongController } from "./Controllers/SongController";
import { SongMiddleware } from "./Middlewares/SongMiddleware";

export class SongRouter extends BaseRouter <SongController, SongMiddleware>
{
    constructor () {
        super(SongController, SongMiddleware)
    }

    routes() {
        this.router.get(
            "/songs",
            (req, res) => this.controller.index(req, res)
        )

        this.router.get(
            "/songs/:name_song",
            (req, res) => this.controller.show(req, res)
        )

        this.router.post(
            '/songs',
            (req, res, next) => [this.middleware.upload(req, res, next)],
            (req, res) => this.controller.store(req, res)
        )

        this.router.put(
            "/songs/:id",
            (req, res) => this.controller.update(req, res)
        )
    }
}