import { TypeOverride } from "types/TypeOverride";
import { ApiBaseResponse } from "types/states/ApiBaseResponse";

export type DeleteTestimonialsSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;

export type DeleteTestimonialsFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: { testimonial_ids?: string } | string;
}>;

export type DeleteTestimonialsPayload = {
    testimonial_ids: number[]
};