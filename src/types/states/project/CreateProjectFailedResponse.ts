import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";
import { CreateProjectPayload } from "./CreateProjectPayload";

export type CreateProjectFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: TypeOverride<Partial<CreateProjectPayload>, { sub_image_urls: string }>  | string;
}>;