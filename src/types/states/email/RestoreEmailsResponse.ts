import { TypeOverride } from "types/TypeOverride";
import { ApiBaseResponse } from "types/states/ApiBaseResponse";

export type RestoreEmailsSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;

export type RestoreEmailsFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: { ids: string } | string;
}>;

export type RestoreEmailsPayload = {
    ids: number[]
};