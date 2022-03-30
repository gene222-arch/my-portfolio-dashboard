import { 
    GetEmailsSuccessResponse, 
    GetEmailsFailedResponse, 
    DestroyEmailsPayload, 
    DestroyEmailsSuccessResponse,
    DestroyEmailsFailedResponse
} from "types/states/email";
import { GetEmailPayload } from "types/states/email/GetEmailPayload";
import { 
    ActionType, 
    GET_EMAILS_START, 
    GET_EMAILS_SUCCEEDED, 
    GET_EMAILS_FAILED, 
    DESTROY_EMAILS_START, 
    DESTROY_EMAILS_SUCCEEDED,
    DESTROY_EMAILS_FAILED
} from './action.types';

export const destroyEmailsStart = (payload: DestroyEmailsPayload): ActionType => ({
    type: DESTROY_EMAILS_START,
    payload
});

export const destroyEmailsSucceeded = (payload: DestroyEmailsPayload): ActionType => ({
    type: DESTROY_EMAILS_SUCCEEDED,
    payload
});

export const destroyEmailsFailed = (payload: DestroyEmailsFailedResponse): ActionType => ({
    type: DESTROY_EMAILS_FAILED,
    payload
});

export const getEmailsStart = (payload: GetEmailPayload): ActionType => ({
    type: GET_EMAILS_START,
    payload
});

export const getEmailsSucceeded = (payload: GetEmailsSuccessResponse): ActionType => ({
    type: GET_EMAILS_SUCCEEDED,
    payload
});

export const getEmailsFailed = (payload: GetEmailsFailedResponse): ActionType => ({
    type: GET_EMAILS_FAILED,
    payload
});