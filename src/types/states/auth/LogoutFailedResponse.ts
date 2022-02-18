import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type LogoutFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;