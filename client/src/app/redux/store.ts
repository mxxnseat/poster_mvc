import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { postsReducer } from "./reducers/posts.reducer";
import { userReducer } from "./reducers/user.reducer";

const reducer = combineReducers(
    {
        posts: postsReducer,
        user: userReducer
    }
)
export const store = createStore(
    reducer,
    composeWithDevTools()
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;