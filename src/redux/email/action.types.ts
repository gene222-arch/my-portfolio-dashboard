import { GetEmailsSuccessResponse, GetEmailsFailedResponse, DestroyEmailsSuccessResponse, DestroyEmailsFailedResponse, DestroyEmailsPayload } from "types/states/email";
import { GetEmailPayload } from "types/states/email/GetEmailPayload";

export const DESTROY_EMAILS_START = 'DESTROY_EMAILS_START';
export const DESTROY_EMAILS_SUCCEEDED = 'DESTROY_EMAILS_SUCCEEDED';
export const DESTROY_EMAILS_FAILED = 'DESTROY_EMAILS_FAILED';
export const GET_EMAILS_START = 'GET_EMAILS_START';
export const GET_EMAILS_SUCCEEDED = 'GET_EMAILS_SUCCEEDED';
export const GET_EMAILS_FAILED = 'GET_EMAILS_FAILED';

export type ActionType = 
    | { type: undefined }
    | { type: typeof DESTROY_EMAILS_START, payload: DestroyEmailsPayload }
    | { type: typeof DESTROY_EMAILS_SUCCEEDED, payload: DestroyEmailsPayload }
    | { type: typeof DESTROY_EMAILS_FAILED, payload: DestroyEmailsFailedResponse }
    | { type: typeof GET_EMAILS_START, payload: GetEmailPayload }
    | { type: typeof GET_EMAILS_SUCCEEDED, payload: GetEmailsSuccessResponse }
    | { type: typeof GET_EMAILS_FAILED, payload: GetEmailsFailedResponse };