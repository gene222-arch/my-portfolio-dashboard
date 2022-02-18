import { Credential } from "../../types/states/auth/Credential";
import { LoginFailedResponse } from "../../types/states/auth/LoginFailedResponse";
import { LoginSuccessResponse } from "../../types/states/auth/LoginSuccessResponse";
import { LogoutFailedResponse } from "../../types/states/auth/LogoutFailedResponse";
import { LogoutSuccessResponse } from "../../types/states/auth/LogoutSuccessResponse";

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export type ActionType = 
    | { type: undefined }
    | { type: typeof LOGIN_START, payload: Credential }
    | { type: typeof LOGIN_SUCCEEDED, payload: LoginSuccessResponse }
    | { type: typeof LOGIN_FAILED, payload: LoginFailedResponse }
    | { type: typeof LOGOUT_START }
    | { type: typeof LOGOUT_SUCCEEDED, payload: LogoutSuccessResponse }
    | { type: typeof LOGOUT_FAILED, payload: LogoutFailedResponse };