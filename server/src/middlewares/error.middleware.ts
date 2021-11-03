import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
    err: string,
    req: Request<{}, {}, unknown>,
    res: Response,
    next: NextFunction
) {
    console.log(`Error in route: ${req.path}`);
    console.log(`Error: ${err}`);

    res.status(500).json({
        message: "Oooops something went wrong"
    })
}