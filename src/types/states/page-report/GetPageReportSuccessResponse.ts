import { TypeOverride } from "types/TypeOverride";
import { ApiBaseResponse } from "types/states/ApiBaseResponse";
import { PageReport } from "./PageReportState";

export type GetPageReportSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: PageReport;
    message: string;
}>;