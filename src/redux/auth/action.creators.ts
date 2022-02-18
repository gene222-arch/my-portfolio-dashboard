import { Credential } from "../../types/states/auth/Credential";
import { LoginFailedResponse } from "../../types/states/auth/LoginFailedResponse";
import { LoginSuccessResponse } from "../../types/states/auth/LoginSuccessResponse";
import { LogoutFailedResponse } from "../../types/states/auth/LogoutFailedResponse";
import { LogoutSuccessResponse } from "../../types/states/auth/LogoutSuccessResponse";
import { 
    ActionType, 
    LOGIN_FAILED, 
    LOGIN_START, 
    LOGIN_SUCCEEDED, 
    LOGOUT_FAILED, 
    LOGOUT_START, 
    LOGOUT_SUCCEEDED 
} from "./action.types";


export const loginStart = (payload: Credential): ActionType => ({
    type: LOGIN_START,
    payload
});

export const loginSucceeded = (payload: LoginSuccessResponse): ActionType => ({
    type: LOGIN_SUCCEEDED,
    payload
});

export const loginFailed = (payload: LoginFailedResponse): ActionType => ({
    type: LOGIN_FAILED,
    payload
});

export const logoutStart = (): ActionType => ({
    type: LOGOUT_START
});

export const logoutSucceeded = (payload: LogoutSuccessResponse): ActionType => ({
    type: LOGOUT_SUCCEEDED,
    payload
});

export const logoutFailed = (payload: LogoutFailedResponse): ActionType => ({
    type: LOGOUT_FAILED,
    payload
});