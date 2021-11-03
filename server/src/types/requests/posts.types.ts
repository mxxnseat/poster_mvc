export interface CreateRequestBody {
    userId: string,
    title: string,
    text: string
}

export interface DeleteRequestBody {
    userId: string,
    postId: string
}