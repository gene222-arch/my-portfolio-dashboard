import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

type Message = {
    name: string,
    avatar_url: string,
    profession: string,
    body: string,
    rate: number
};

export type CreateTestimonialFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: Partial<Message> | string;
}>;