import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type GetPageReportFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;