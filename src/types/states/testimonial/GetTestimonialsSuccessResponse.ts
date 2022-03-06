import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";
import { TestimonialItemType } from "./TestimonialState";

export type GetTestimonialsSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: TestimonialItemType[];
    message: string;
}>;