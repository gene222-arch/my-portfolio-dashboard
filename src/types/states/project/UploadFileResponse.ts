import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type UploadFileSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: {
        url: string
    };
    message: string;
}>;


export type UploadFileFailedResponse = TypeOverride<ApiBaseResponse, {
    data: {
        image?: string
    };
    message: string;
}>;