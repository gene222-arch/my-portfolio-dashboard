import { TypeOverride } from "types/TypeOverride";
import { ApiBaseResponse } from "types/states/ApiBaseResponse";

export type DestroyEmailsSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;

export type DestroyEmailsFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: { ids: string } | string;
}>;

export type DestroyEmailsPayload = {
    ids: number[]
};