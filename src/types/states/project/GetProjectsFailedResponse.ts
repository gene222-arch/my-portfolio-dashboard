import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type GetProjectsFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;