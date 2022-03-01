import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";
import { UpdateAccountDetailsPayload } from "./UpdateAccountDetailsPayload";

export type UpdateAccountSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;