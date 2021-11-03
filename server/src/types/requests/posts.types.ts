export interface CreateRequestBody {
    login: string,
    title: string,
    text: string
}

export interface DeleteRequestBody {
    login: string,
    postId: string
}