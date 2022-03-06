import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type CreateTestimonialSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;