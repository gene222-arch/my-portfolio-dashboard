import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

type Message = {
    name: string,
    email: string,
    password: string,
    phone_number: string,
    address: string,
    city: string,
    state: string,
    zip_code: string,
    country: string,
};

export type UpdateAccountFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: Partial<Message> | string;
}>;