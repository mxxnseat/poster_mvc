import { PostsActions, PostsInitialState } from "../types/posts.redux.type";

const initialState: PostsInitialState = {
    list: [
        {
            author: "admin",
            createTime: new Date().toISOString(),
            text: "mock text",
            title: "mock title",
            additionalText: "mock additional text"
        }
    ]
}

export const postsReducer = (state = initialState, { type, payload }: PostsActions) => {
    switch (type) {
        default: return state;
    }
}