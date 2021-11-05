import { UserActions, UserInitialState } from "../types/user.redux.type";

const initialState: UserInitialState = {
    isAuth: false,
    userData: null
}

export const userReducer = (state = initialState, { type, payload }: UserActions) => {
    switch (type) {
        default: return state;
    }
}