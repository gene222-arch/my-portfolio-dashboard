import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type GetPageReportSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: {
        id: number,
        views: number,
        likes: number,
        sent_mails: number,
        projects: number
    };
    message: string;
}>;