import bcrypt from "bcrypt"

import { UserDAO } from "../../models/user/user.dao";
import { DeleteRequestBody } from "../../types/requests/user.types";


export async function deleteUserService({ login, password }: DeleteRequestBody) {
    const user = await UserDAO.get(login);

    if (!user) {
        return {
            status: 404,
            data: {
                message: "User not found :("
            }
        }
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return {
            status: 404,
            data: {
                message: "Not correct password"
            }
        }
    }

    await UserDAO.delete(login);

    return {
        status: 200,
        data: {
            message: "User delete!",
            redirectUrl: "/"
        }
    }
}