import { NextFunction, Request, Response,Router } from "express";


export interface Route{
    endpoint: string,
    route: Router
}
