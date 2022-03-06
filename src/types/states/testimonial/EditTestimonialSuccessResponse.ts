import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type EditTestimonialSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;