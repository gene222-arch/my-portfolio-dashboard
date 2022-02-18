import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type LogoutSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;