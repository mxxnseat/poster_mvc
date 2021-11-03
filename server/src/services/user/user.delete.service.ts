import bcrypt from "bcrypt";

import User from "../../models/user.model";
import { DeleteRequestBody } from "types/requests/user.types";


export async function deleteUserService({ login, password }: DeleteRequestBody) {

    const user = await User.findOne({ login });

    if (!user) {
        return {
            message: "User not found :("
        }
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return {
            message: "Not correct password"
        }
    }

    await User.deleteOne({ login });

    return {
        message: "User delete!",
        redirectUrl: "/"
    }
}