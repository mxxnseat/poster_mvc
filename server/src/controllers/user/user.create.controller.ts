import { Request, Response } from "express";

import { createUserService } from "../../services/user/user.create.service";

import { CreateRequestBody } from "../../types/requests/user.types";

export async function createUser(req: Request<{}, {}, CreateRequestBody>, res: Response) {
    try {
        const user = await createUserService(req.body);

        res.status(200).json(user);
    } catch (e: unknown) {
        console.log(e);
        res.status(500).json({
            message: "Oooops something went wrong",
        });
    }
}