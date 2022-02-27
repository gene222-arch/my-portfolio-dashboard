import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";
import { User } from "./User";

export type GetAccountDetailSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: User;
    message: string;
}>;