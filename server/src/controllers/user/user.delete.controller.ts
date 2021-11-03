import { Request, Response } from "express";

import { deleteUserService } from "../../services/user/user.delete.service";
import { DeleteRequestBody } from "types/requests/user.types";

export async function deleteUser(req: Request<{}, {}, DeleteRequestBody>, res: Response) {
    const data = await deleteUserService(req.body);

    res.status(301).json(data)
}