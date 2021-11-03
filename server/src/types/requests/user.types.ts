
export interface CreateRequestBody {
    login: string,
    password: string,
    username: string
}
export interface DeleteRequestBody {
    password: string,
    login: string
}