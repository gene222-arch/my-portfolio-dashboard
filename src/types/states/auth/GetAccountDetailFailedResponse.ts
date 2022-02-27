import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type GetAccountDetailFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;