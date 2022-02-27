import { Credential } from "../../types/states/auth/Credential";
import { GetAccountDetailFailedResponse } from "../../types/states/auth/GetAccountDetailFailedResponse";
import { GetAccountDetailSuccessResponse } from "../../types/states/auth/GetAccountDetailSuccessResponse";
import { LoginFailedResponse } from "../../types/states/auth/LoginFailedResponse";
import { LoginSuccessResponse } from "../../types/states/auth/LoginSuccessResponse";
import { LogoutFailedResponse } from "../../types/states/auth/LogoutFailedResponse";
import { LogoutSuccessResponse } from "../../types/states/auth/LogoutSuccessResponse";
import { 
    ActionType, 
    GET_ACCOUNT_DETAILS_FAILED, 
    GET_ACCOUNT_DETAILS_START, 
    GET_ACCOUNT_DETAILS_SUCCEEDED, 
    LOGIN_FAILED, 
    LOGIN_START, 
    LOGIN_SUCCEEDED, 
    LOGOUT_FAILED, 
    LOGOUT_START, 
    LOGOUT_SUCCEEDED
} from "./action.types";


export const getAccountDetailsStart = (userID: number): ActionType => ({
    type: GET_ACCOUNT_DETAILS_START,
    payload: userID
});

export const getAccountDetailsSucceeded = (payload: GetAccountDetailSuccessResponse): ActionType => ({
    type: GET_ACCOUNT_DETAILS_SUCCEEDED,
    payload
});

export const getAccountDetailsFailed = (payload: GetAccountDetailFailedResponse): ActionType => ({
    type: GET_ACCOUNT_DETAILS_FAILED,
    payload
});

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