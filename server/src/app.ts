import express, { Application as IApplication, Request, Response, NextFunction } from "express";
import { errorMiddleware } from "./middlewares/error.middleware";
import { Route } from "types/express.types";


type middlewaresSplit = {
    before: Array<(...args: any) => any>,
    after: Array<(...args: any) => any>
}

class Application {
    private PORT: string | number = process.env.PORT || 5000;

    constructor(
        middlewares: middlewaresSplit = {
            before: [],
            after: []
        },
        routes: Array<Route> = [],
        private application: IApplication = express(),

    ) {

        middlewares.before.forEach(middleware => this.application.use(middleware()));

        routes.forEach(route => this.application.use(route.endpoint, route.route));

        middlewares.after.forEach(middleware => this.application.use(
            (err: string, req: Request, res: Response, next: NextFunction) => {
                middleware(err, req, res, next)
            })
        );

    }

    public start() {
        this.application.listen(this.PORT, () => {
            console.log(`Start on ${this.PORT}`);
        })
    }
}

export default Application;