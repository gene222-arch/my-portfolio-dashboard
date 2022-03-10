import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type UploadAvatarSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: {
        url: string
    };
    message: string;
}>;