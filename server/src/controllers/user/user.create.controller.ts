import { Request, Response } from "express";

import { createUserService } from "../../services/user/user.create.service";

import { CreateRequestBody } from "../../types/requests/user.types";

export async function createUser(req: Request<{}, {}, CreateRequestBody>, res: Response) {
    const data = await createUserService(req.body);

    res.status(200).json(data);
}