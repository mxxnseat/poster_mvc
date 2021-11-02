import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../../models/user.model";
import { DeleteRequestBody } from "types/requests/user.types";

export async function deleteUser(req: Request<{}, {}, DeleteRequestBody & { login: string }>, res: Response) {
    try {
        const { password, login } = req.body;

        const user = await User.findOne({ login });

        if (!user) {
            return res.status(404).json({
                message: "User not found :("
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(403).json({
                message: "Not correct password"
            });
        }

        await User.deleteOne({ login });

        return res.status(301).json({
            message: "User delete!",
            redirectUrl: "/"
        })
    } catch (e: unknown) {
        console.log(e);
        res.status(500).json({
            message: "Oooops something went wrong",
        });
    }
}