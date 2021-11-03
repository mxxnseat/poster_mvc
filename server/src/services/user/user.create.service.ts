import bcrypt from "bcrypt";
import { UserDAO } from "../../models/user/user.dao";
import { CreateRequestBody } from "../../types/requests/user.types";


export async function createUserService(data: CreateRequestBody) {
    const passwordHash = bcrypt.hashSync(data.password, 7);

    const { username, posts } = await UserDAO.create({
        ...data,
        password: passwordHash
    })

    return {
        username,
        posts
    };
}