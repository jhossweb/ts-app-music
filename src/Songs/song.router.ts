import { BaseRouter } from "../config/base.router";
import { SongController } from "./Controllers/SongController";
import { SongMiddleware } from "./Middlewares/SongMiddleware";

export class SongRouter extends BaseRouter <SongController, SongMiddleware>
{
    constructor () {
        super(SongController, SongMiddleware)
    }

    routes() {
        this.router.post(
            '/uploads',
            (req, res, next) => [this.middleware.upload(req, res, next)],
            (req, res) => this.controller.store(req, res)
        )
    }
}