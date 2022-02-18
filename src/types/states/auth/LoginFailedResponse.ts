import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

type Message = {
    email: string,
    password: string
};

export type LoginFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: Partial<Message> | string;
}>;