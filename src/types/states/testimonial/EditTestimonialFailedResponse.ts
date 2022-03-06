import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

type Message = {
    name: string,
    profession: string,
    body: string,
    rate: number
};

export type EditTestimonialFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: Partial<Message> | string;
}>;