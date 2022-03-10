import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

type Message = {
    avatar: string
};

export type UploadAvatarFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null,
    message: Partial<Message> | string;
}>;