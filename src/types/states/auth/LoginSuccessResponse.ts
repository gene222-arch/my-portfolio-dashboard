import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";
import { User } from "./User";

type Message = {
    email: string,
    password: string
};

export type LoginSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: {
        access_token: string,
        token_type: string,
        expired_at: string,
        data: User
    };
    message: Partial<Message> | string;
}>;