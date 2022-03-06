import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type GetTestimonialsFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;