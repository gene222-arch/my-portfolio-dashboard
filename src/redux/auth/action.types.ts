import { Credential } from "../../types/states/auth/Credential";
import { GetAccountDetailFailedResponse } from "../../types/states/auth/GetAccountDetailFailedResponse";
import { GetAccountDetailSuccessResponse } from "../../types/states/auth/GetAccountDetailSuccessResponse";
import { LoginFailedResponse } from "../../types/states/auth/LoginFailedResponse";
import { LoginSuccessResponse } from "../../types/states/auth/LoginSuccessResponse";
import { LogoutFailedResponse } from "../../types/states/auth/LogoutFailedResponse";
import { LogoutSuccessResponse } from "../../types/states/auth/LogoutSuccessResponse";
import { UpdateAccountDetailsPayload } from "../../types/states/auth/UpdateAccountDetailsPayload";
import { UpdateAccountFailedResponse } from "../../types/states/auth/UpdateAccountFailedResponse";
import { UpdateAccountSuccessResponse } from "../../types/states/auth/UpdateAccountSuccessResponse";

export const GET_ACCOUNT_DETAILS_START = 'GET_ACCOUNT_DETAILS_START';
export const GET_ACCOUNT_DETAILS_SUCCEEDED = 'GET_ACCOUNT_DETAILS_SUCCEEDED';
export const GET_ACCOUNT_DETAILS_FAILED = 'GET_ACCOUNT_DETAILS_FAILED';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const UPDATE_ACCOUNT_DETAILS_START = 'UPDATE_ACCOUNT_DETAILS_START';
export const UPDATE_ACCOUNT_DETAILS_SUCCEEDED = 'UPDATE_ACCOUNT_DETAILS_SUCCEEDED';
export const UPDATE_ACCOUNT_DETAILS_FAILED = 'UPDATE_ACCOUNT_DETAILS_FAILED';

export type ActionType = 
    | { type: undefined }
    | { type: typeof GET_ACCOUNT_DETAILS_START, payload: number }
    | { type: typeof GET_ACCOUNT_DETAILS_SUCCEEDED, payload: GetAccountDetailSuccessResponse }
    | { type: typeof GET_ACCOUNT_DETAILS_FAILED, payload: GetAccountDetailFailedResponse }
    | { type: typeof LOGIN_START, payload: Credential }
    | { type: typeof LOGIN_SUCCEEDED, payload: LoginSuccessResponse }
    | { type: typeof LOGIN_FAILED, payload: LoginFailedResponse }
    | { type: typeof LOGOUT_START }
    | { type: typeof LOGOUT_SUCCEEDED, payload: LogoutSuccessResponse }
    | { type: typeof LOGOUT_FAILED, payload: LogoutFailedResponse }
    | { type: typeof UPDATE_ACCOUNT_DETAILS_START, payload: UpdateAccountDetailsPayload }
    | { type: typeof UPDATE_ACCOUNT_DETAILS_SUCCEEDED, payload: UpdateAccountSuccessResponse }
    | { type: typeof UPDATE_ACCOUNT_DETAILS_FAILED, payload: UpdateAccountFailedResponse };