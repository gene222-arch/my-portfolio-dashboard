import { GetEmailsSuccessResponse, GetEmailsFailedResponse } from "types/states/email";
import { GetEmailPayload } from "types/states/email/GetEmailPayload";
import { ActionType, GET_EMAILS_START, GET_EMAILS_SUCCEEDED, GET_EMAILS_FAILED } from './action.types';

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