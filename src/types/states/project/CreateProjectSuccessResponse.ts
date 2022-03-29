import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";
import { ProjectItemType } from "./ProjectState";

export type CreateProjectSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: ProjectItemType;
    message: string;
}>;