import { Action } from "@ngrx/store";
import { User } from "../models/user";


export enum UserActionTypes{
    ADD_USER = '[USER] Add User'
}

export class AddUserAction implements Action{
    readonly type = UserActionTypes.ADD_USER;

    constructor(public payload: User){}
}

export type UserAction = AddUserAction;