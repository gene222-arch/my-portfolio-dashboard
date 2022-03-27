import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type GetEmailsFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;