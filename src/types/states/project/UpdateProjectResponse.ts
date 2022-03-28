import { TypeOverride } from "types/TypeOverride";
import { ApiBaseResponse } from "types/states/ApiBaseResponse";

export type UpdateProjectSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: string;
}>;

export type UpdateProjectFailedResponse = TypeOverride<ApiBaseResponse, {
    data: null;
    message: TypeOverride<
        Partial<UpdateProjectPayload>, 
        { 
            project_id: string, 
            sub_image_urls: string 
        }> | string;
}>;

export type UpdateProjectPayload = {
    project_id: number,
    title: string,
    image_url: string;
    website_url?: string;
    description: string;
    client_feedback?: string;
    sub_image_urls: string[];
};