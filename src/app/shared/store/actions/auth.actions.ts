import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
}

export class LogIn implements Action {
  
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {
    console.log('in2');
  }
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) { console.log('in5')}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}




export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure;
