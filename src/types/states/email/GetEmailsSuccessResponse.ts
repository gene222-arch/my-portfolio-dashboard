import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";
import { EmailItemType } from "./EmailState";

export type GetEmailsSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: EmailItemType[];
    message: string;
}>;