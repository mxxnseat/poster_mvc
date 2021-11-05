import { User } from "../../../domains/user.domain";

export interface UserInitialState {
    isAuth: boolean,
    userData: User | null
}

export enum EnumUserActions {
    LOGIN = "LOGIN"
}

export type UserActionsTypes = keyof typeof EnumUserActions;

export interface UserLoginAction {
    type: EnumUserActions.LOGIN,
    payload: User
}


export type UserActions = UserLoginAction;