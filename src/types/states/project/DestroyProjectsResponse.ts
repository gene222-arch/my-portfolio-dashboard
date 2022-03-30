import { TypeOverride } from "types/TypeOverride";
import { ApiBaseResponse } from "types/states/ApiBaseResponse";

export type DestroyProjectsSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;

export type DestroyProjectsFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: { project_ids: string } | string;
}>;

export type DestroyProjectsPayload = {
    project_ids: number[]
};