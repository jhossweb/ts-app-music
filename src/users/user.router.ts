import { BaseRouter } from "../config/base.router";
import { UserController } from "./controllers/user.controller";
import { UserMiddleware } from "./middlewares/user.middleware";

export class UserRouter extends BaseRouter<UserController, UserMiddleware>
{
    constructor() {
        super(UserController, UserMiddleware)
    }

    routes(): void {
        this.router.get(
            "/users",
            (req, res) => this.controller.index(req, res)
        )

        this.router.post(
            "/users",
            (req, res, next) => this.middleware.userValidator(req, res, next),
            (req, res) => this.controller.store(req, res) 
        )
    }
}