import { BaseRouter } from "../config/base.router";
import { GenderController } from "./Controllers/gender.controller";
import { GenderMiddleware } from "./Middlewares/GenderMiddleware";


export class GenderRouter extends BaseRouter<GenderController, GenderMiddleware>
{
    constructor() {
        super(GenderController, GenderMiddleware)
    }

    routes(): void {
        this.router.get(
            "/gender",
            (req, res) => this.controller.index(req, res)
        )

        this.router.post(
            "/gender",
            (req, res, next) => [this.middleware.genderValidator(req, res, next)],
            (req, res) => this.controller.store(req, res)
        )

        this.router.put(
            "/gender/:id",
            (req, res, next) => [this.middleware.genderValidator(req, res, next)],
            (req, res) => this.controller.update(req, res)
        )

        this.router.delete(
            "/gender/:id",
            (req, res) => this.controller.delete(req, res)
        )
    }
}