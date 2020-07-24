import { User } from "../models/user";
import { UserAction, UserActionTypes } from "../actions/user.actions";


export function UserReducer(state: Array<User>, action: UserAction) {

    switch (action.type) {
        case UserActionTypes.ADD_USER:
            console.log(state);
            console.log(action.payload);
            return [...state, action.payload];
        default:
            return state;

    }

}